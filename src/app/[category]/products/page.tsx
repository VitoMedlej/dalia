import Preloader2 from "@/Components/Preloader2"
import {server} from "@/Utils/Server"
import client from '@/database/mongodb';
// import type {  NextApiResponse}
// from 'next';
// import {NextResponse } from 'next/server';
// import {type NextRequest} from 'next/server';



const Page = async(ctx : any) => {

  try {

    // const page = 0;
    const {category} = ctx.params;
    const {search } = ctx?.searchParams;
    const {page} = ctx?.searchParams;
    const {type} = ctx?.searchParams;
    const pageSize = 12; // Number of items per page

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

        
        let filterByCate = !category || category === 'collection' || category === 'category' ? null : `${category}`.replace(/-/g, ' ').toLocaleLowerCase()
        let filterByType = !type ? null : `${type}`.replace(/-/g, ' ').toLocaleLowerCase()
    const ProductsCollection = await client
        .db("CRAFT")
        .collection("Products");
    let products : any = []

    let countQuery;

    if (!filterByCate){
        if (filterByType) {
          
          countQuery = await ProductsCollection.count({type: filterByType});
        }
        else {
          countQuery = await ProductsCollection.count();

        }
    } else {
        countQuery = await ProductsCollection.count({category: filterByCate});
      }
    
    const totalPages = Number(Math.ceil(countQuery / pageSize)); // Total number of pages
    const filtered = filterByCate && filterByCate !== 'null' && filterByCate !== null


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
        
      filtered  && filterByType  ? {
              category: {
                $regex: new RegExp(
                  `^${filterByCate?.toLocaleLowerCase().replace(/-/g, ' ')}$`,
                  'i'
                ),
              },
              type : {
                $regex: new RegExp(
                  `^${filterByType?.toLocaleLowerCase().replace(/-/g, ' ')}$`,
                  'i'
                ),
              } ,

            }
          : filtered ?  {
            category: {
              $regex: new RegExp(
                `^${filterByCate?.toLocaleLowerCase().replace(/-/g, ' ')}$`,
                'i'
              ),
            },
          } : {}
      )
        .sort({_id: -1})
        .skip(Number(page * 12 || 0) )
        .limit(12)

    await ProductsQuery.forEach((doc : any) => {

        products.push(doc)

    });
    

 

    return (<Preloader2 totalPages={totalPages || 1} data={products || null}/>)
  }
catch (err) {
  console.log('err: ', err);
  
  return (<Preloader2 totalPages={1} data={null}/>)

}
}

export default Page


export const dynamic = 'force-dynamic'
