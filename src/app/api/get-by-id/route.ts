import client from '@/database/mongodb';
import { ObjectId } from 'mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
    const { searchParams } = new URL(req.url);
    let id=  searchParams.get('id') || null 
    if (!id) {
        return NextResponse.json({success: false});
      
    }
    const ProductsCollection = await client
    .db("PETS")
    .collection("Products");

    let moreProducts: any[]= []
    const product = await ProductsCollection
        .findOne({_id:new ObjectId(`${id}`)});

        const moreProductsQuery  = await ProductsCollection
        .find({})
        .sort({_id: -1})
        .limit(10)

    await moreProductsQuery.forEach((doc : any) => {

        moreProducts.push(doc)

    });

     
    if (!product ) {
        return NextResponse.json({success: false});
    }

    return NextResponse.json({
        success: true,
        product,
        moreProducts
    });

}
