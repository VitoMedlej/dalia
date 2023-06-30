import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse}
from 'next';
import {NextResponse ,NextRequest} from 'next/server'

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
            const { searchParams } = new URL(req.nextUrl);
            const page = searchParams.get('page')
            let category=  searchParams.get('category') || null
        // const { searchParams } = new URL(req.url);
        // let category=  searchParams.get('category') || null
        // let page=  searchParams.get('page') || 0

        
        let filterByCate = !category || category === 'collection' || category === 'category' ? null : `${category}`.toLocaleLowerCase()
    const ProductsCollection = await client
        .db("F&B")
        .collection("Products");
    let products : any = []


    console.log('filterByCate: ', filterByCate);
    const ProductsQuery = await ProductsCollection
        .find({filterByCate})
        .sort({_id: -1})
        .skip(Number(page || 0) * 12)
        .limit(12)

    await ProductsQuery.forEach((doc : any) => {
        console.log('doc: ', doc);

        products.push(doc)

    });



    if ( !products || products.length < 0) {
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
        success: true,
        data: {
            products : null
           
        }
    });
}
 

}
