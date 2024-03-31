import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'
// fake data
// import products from '../../utils/data/products';

export async function GET(req : NextRequest, res : NextApiResponse) {


  // const product = req.body.product
  if (req.method === 'GET') {


       const Categories = await client.db("DALIA").collection("Categories")
       const docs = await Categories.find({})
      const catesarray : any[] = [];
    await docs.forEach((prod:any) =>{
        catesarray.push(prod);
        })

        if (catesarray?.length > 0) {
            return NextResponse.json({record:catesarray});
          }

}
return NextResponse.json(null);
    // return res.status(200).send(products)
}

export const dynamic = 'force-dynamic'
