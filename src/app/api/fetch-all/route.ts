import client from '@/database/mongodb';
import type { NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'

export async function GET(req : Request, res : NextApiResponse) {
    try {

        const { searchParams } = new URL(req.url);
        let category=  searchParams.get('category') || null
        let page=  searchParams.get('page') || 0

        
        let filterByCate = !category || category === 'collection' || category === 'category' ? null : category
    const ProductsCollection = await client
        .db("F&B")
        .collection("Products");
    let products : any = []


    const ProductsQuery = await ProductsCollection
        .find({filterByCate})
        .sort({_id: -1})
        .skip(Number(page || 0) * 12)
        .limit(12)

    await ProductsQuery.forEach((doc : any) => {

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
    console.log('e: ', e);
    return NextResponse.json({
        success: true,
        data: {
            products : null
           
        }
    });
}
 

}
