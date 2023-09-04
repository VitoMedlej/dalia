import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export  async function POST(req: NextRequest, res: NextApiResponse) {
  // const order = req?.body.get('order')
  const {order} = await req.json()
  if (req.method === 'POST') {
    // Process a POST request
    if (!order) return NextResponse.json({success:false})
       const insertReq = await client.db("PETS").collection("Orders").insertOne(order);
       if (insertReq.acknowledged) {         
         return NextResponse.json({success:true});
        }
}
return NextResponse.json({success:false});

}