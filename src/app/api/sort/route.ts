import client from '@/database/mongodb';
import type {  NextApiResponse}
from 'next';
import {NextResponse } from 'next/server';
import {type NextRequest} from 'next/server';


export async function GET(req :NextRequest , res : NextApiResponse) {
    // try{
    // const url = req.nextUrl
    // const { searchParams } = new URL(req.nextUrl);
    // const page = searchParams.get('page')
    // let category=  searchParams.get('category') || null

    // console.log('page: ', page);
    // return NextResponse.json({success: false});
    
        // const { page,category } = req;
        // let category=  searchParams.get('category') || null
        // let page=  searchParams.get('page') || 0
    // }
    // catch(err){
    //     console.log('err: ', err);

    // }

        try {
            // const { searchParams } = new URL(req.nextUrl);
          
            // const page = searchParams.get('page') || 0
          
            // let category=  searchParams.get('category') || null
          

            const { nextUrl } = req;
    const category = nextUrl.searchParams.get('category');
    const search = nextUrl.searchParams.get('search') ;
    const sort = nextUrl.searchParams.get('sort') || 'latest';
   
            // let page = 0;
            // let category = null
        // const { searchParams } = new URL(req.url);
        // let category=  searchParams.get('category') || null
        // let page=  searchParams.get('page') || 0

        // let filterBySort = !latest || sort === 'latest' || sort === ''  ? null : -1
        let sortCriteria;
        switch (sort) {
          case 'latest':
            sortCriteria = { _id: -1 };
            break;
          case 'highestPrice':
            sortCriteria = { convertedPrice: -1 };
            break;
          case 'lowestPrice':
            sortCriteria = { convertedPrice: 1 };
            break;
          default:
            sortCriteria = {_id : -1};
        }
        let filterByCate = !category || category === 'collection' || category === 'category' ? null : `${category}`.toLocaleLowerCase()
    const ProductsCollection = await client
        .db("PETS")
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
    await ProductsCollection.aggregate([
        {
          $match: filterByCate && filterByCate !== 'null' && filterByCate !== null
            ? { category: filterByCate }
            : {}
        },
        {
          $addFields: {
            convertedPrice: { $toDouble: '$price' }
          }
        },
        {
          $sort: sortCriteria
        },
        {
          $limit: 50
        }
      ]);

    await ProductsQuery.forEach((doc : any) => {

        products.push(doc)

    });



    if ( !products || products.length < 1) {
        return NextResponse.json({success: false});
    }
    return NextResponse.json({
        success: true,
        data: {
            products
           
        }
    });
}
catch (e) {
    console.log('e sort function: ', e);
    return NextResponse.json({
        success: false,
        data: {
            products : null
           
        }
    });
}
 

}
export const dynamic = 'force-dynamic'