import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
try {

    const ProductsCollection = await client
        .db("PETS")
        .collection("Products");
    let featuredProducts : any = [];
    let products : any = []

    const featuredProductsQuery = await ProductsCollection
        // .find({isFeatured: true})
        .find({})
        .limit(35)
    // const ProductsQuery = await ProductsCollection
    //     // .find({isFeatured: false})
    //     .find({})
    //     .sort({_id: -1})
    //     .limit(35)
    
    // await ProductsQuery.forEach((doc : any) => {

    //     products.push(doc)

    // });

    await featuredProductsQuery.forEach((doc : any) => {

        featuredProducts.push(doc)

    })

    // if (!featuredProducts || !products || featuredProducts.length < 0 || products.length < 0) {
        if (!featuredProducts || featuredProducts.length < 0 ) {
        return NextResponse.json({success: false});
    }

    return NextResponse.json({
        success: true,
        data: {
            // products,
            featuredProducts
        }
    });
}

catch (error) {
    console.log('error get-data: ', error);

}
}
