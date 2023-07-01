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
    console.log('category: ', category);

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
        .db("F&B")
        .collection("Products");
    let products : any = []


   
    const ProductsQuery = await ProductsCollection
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
        console.log('doc: ', doc);

    });
    

    console.log('products: ', products);

    return (<Preloader2 data={products || null}/>)
}

export default Page