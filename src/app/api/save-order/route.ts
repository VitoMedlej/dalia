import client from '@/database/mongodb';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

interface Product {
  _id: string;
  qty: number;
}

interface Order {
  products: Product[];
}

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { order }: { order: Order } = await req.json();
      
      if (!order) return NextResponse.json({ success: false });
      
      const insertReq = await client.db("DALIA").collection("Orders").insertOne(order);
      
      if (insertReq.acknowledged) {
        for (const product of order.products) {
          const { _id, qty } = product;
          
          if (isNaN(Number(qty)) || Number(qty) <= 0) {
            return NextResponse.json({ success: false, message: 'Invalid quantity for product' });
          }
          
          // Retrieve the current soldQuantity from the database
          const existingProduct = await client.db("DALIA")
          .collection("Products")
          .findOne({ _id: new ObjectId(_id) });
          const currentSoldQuantity = existingProduct ? existingProduct?.soldQuantity || 0 : 0;
          
          // Calculate the new soldQuantity by adding the current and new quantity sold
          const newSoldQuantity = currentSoldQuantity + Number(qty);
          
          const updateStockReq = await client.db("DALIA").collection("Products").updateOne(
            { _id: new ObjectId(_id) },
            { 
              $inc: { stock: -Number(qty), soldQuantity: newSoldQuantity - currentSoldQuantity } 
            }
          );
          
          if (!updateStockReq.acknowledged) {
            return NextResponse.json({ success: false, message: 'Failed to update stock values' });
          }
        }
        return NextResponse.json({ success: true });
      }
    }
  } catch (e) {
    console.log('e: ', e);
  }
  
  return NextResponse.json({ success: false });
}
