import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
try {

    const ProductsCollection = await client
        .db("DALIA")
        .collection("Images");

    const Images = await ProductsCollection
    .find({})
    .limit(20)
    .toArray()

    if (!Images) {
        return NextResponse.json({success: false});
    }

    return NextResponse.json({
        success: true,
        data: {
            Images
        }
    });
}

catch (error) {
    console.log('error get-Images: ', error);

}
}