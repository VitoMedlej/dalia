import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'
const { MongoClient, ServerApiVersion } = require('mongodb');

export async function GET(req : NextRequest, res : NextApiResponse) {
try {

    if (!client) {
        // console.log('client: ', client);
        const uri = `mongodb+srv://vittomedl:d9g2ZpBVtS4fYUR7@cluster0.khubqfx.mongodb.net/?retryWrites=true&w=majority`


// const uri = "mongodb+srv://adminuser:<password>@cluster0.pukzncm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
await client.connect((err:any) => {
    if (err) {
        //   const collection = client.db("Ecom").collection("Users");
        //   console.log('collection: ', collection);
        // perform actions on the collection object
        console.error('Failed to connect to MongoDB', err);
    };
});
        return NextResponse.json({success: false});

    }

    const ProductsCollection = await client
        .db("BEE")
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

   await client.close()
    return NextResponse.json({
        success: true,
        data: {
            // products,
            featuredProducts
        }
    });
}

catch (error:any) {
    console.log('error get-data: ', error);
    // client.close()
    return NextResponse.json({
        success: false,
        error: error.message, // or error.stack if you want the full stack trace
    });

}
}

export const dynamic = 'force-dynamic'
