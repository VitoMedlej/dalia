import Preloader2 from "@/Components/Preloader2"
import {server} from "@/Utils/Server"
import client from '@/database/mongodb';
import type {  NextApiResponse}
from 'next';
import {NextResponse } from 'next/server';
import {type NextRequest} from 'next/server';



const Page = async(ctx : any) => {
    const page = 0;
    const {category} = ctx.params;
    const {search } = ctx?.searchParams;
   

    // const req = await fetch(`${server}/api/fetch-all?page=${pageNB}&category=${category
    //     ? `${category}`.replace(/-/g, ' ')
    //     : 'collection'}`, { cache: 'no-store' })
    // const res = await req.json()
    // console.log('res: ', res);


    // const { nextUrl } = req;
    // const category = nextUrl.searchParams.get('category');
    // const page = nextUrl.searchParams.get('page');
            // let page = 0;
            // let category = null
        // const { searchParams } = new URL(req.url);
        // let category=  searchParams.get('category') || null
        // let page=  searchParams.get('page') || 0

        
        let filterByCate = !category || category === 'collection' || category === 'category' ? null : `${category}`.toLocaleLowerCase()
    const ProductsCollection = await client
        .db("BABYWEAR")
        .collection("Products");
    let products : any = []


   
    const ProductsQuery =
    
    search && search?.length > 1 ?      await ProductsCollection.find({
      $or: [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { category: { $regex: search, $options: 'i' } }
      ]
  }) :
    
    await ProductsCollection
    .find(
        filterByCate && filterByCate !== 'null' && filterByCate !== null
          ? {
              category: {
                $regex: new RegExp(
                  `^${filterByCate.toLocaleLowerCase().replace(/-/g, ' ')}$`,
                  'i'
                ),
              },
            }
          : {}
      )
        .sort({_id: -1})
        .skip(Number(page || 0) * 12)
        .limit(12)

    await ProductsQuery.forEach((doc : any) => {

        products.push(doc)

    });
    

 

    return (<Preloader2 data={products || null}/>)
}

export default Page