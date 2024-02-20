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
          
          // Retrieve the current soldQuantity and stock from the database
          const existingProduct = await client.db("DALIA")
            .collection("Products")
            .findOne({ _id: new ObjectId(_id) });

          const currentStock = parseInt(existingProduct?.stock); // Parse stock string to integer
          const currentSoldQuantity = parseInt(existingProduct?.soldQuantity) || 0;

          if (isNaN(currentStock)) {
            return NextResponse.json({ success: false, message: 'Invalid stock value for product' });
          }
          
          // Calculate the new stock and soldQuantity
          const newStock = currentStock - Number(qty);
          const newSoldQuantity = currentSoldQuantity + Number(qty);
          
          const updateStockReq = await client.db("DALIA").collection("Products").updateOne(
            { _id: new ObjectId(_id) },
            { 
              $set: { stock: newStock.toString(), soldQuantity: newSoldQuantity.toString() } 
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

