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
    const page = nextUrl.searchParams.get('page');
    const type = nextUrl.searchParams.get('type');
            // let page = 0;
            // let category = null
        // const { searchParams } = new URL(req.url);
        // let category=  searchParams.get('category') || null
        // let page=  searchParams.get('page') || 0

        
        let filterByCate = !category || category === 'collection' || category === 'category' ? null : `${category}`.replace(/-/g, ' ').toLocaleLowerCase()
        let filterByType = !type || type === 'any' || type === 'null' ? null : `${type}`.replace(/-/g, ' ').toLocaleLowerCase()
    const ProductsCollection = await client
        .db("PETS")
        .collection("Products");
    let products : any = []


   
    const ProductsQuery = await ProductsCollection
        .find(filterByCate && filterByCate !== 'null' && filterByCate !== null && filterByType ? { category: filterByCate , type : filterByType  } :  filterByCate && filterByCate !== 'null' && filterByCate !== null ? {category: filterByCate} : {})
        .sort({_id: -1})
        .skip(Number(page || 0) * 12)
        .limit(12)

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
    console.log('e fetch-all: ', e);
    return NextResponse.json({
        success: false,
        data: {
            products : null
           
        }
    });
}
 

}
