import withMongoClient from '@/database/mongo';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
    try {
        const result : any = await withMongoClient(async(client : any) => {
            const ProductsCollection = await client
                .db("BEE")
                .collection("Products");
            let featuredProducts : any = [];

            const featuredProductsQuery = await ProductsCollection
                .find({})
                .limit(35)

            await featuredProductsQuery.forEach((doc : any) => {

                featuredProducts.push(doc)

            })

            return featuredProducts
        });

        return NextResponse.json({success: true, result});
    } catch (error : any) {
        console.error('Error in GET route:', error);
        return NextResponse.json({
            success: false,
            error: error.message || 'Internal Server Error'
        });
    }
}

export const dynamic = 'force-dynamic'
