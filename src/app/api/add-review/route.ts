import client from '@/database/mongodb';
import { ObjectId } from 'mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'



export async function POST(req: NextRequest, res: NextApiResponse) {
    try {
        const  { productId, review }= await req.json();
  
      const ProductsCollection = await client.db("DALIA").collection("Products");
  
      // Find the product by its ID
      const product = await ProductsCollection  .findOne({_id:new ObjectId(`${productId}`)});
  
      if (!product) {
        return NextResponse.json({ success: false, message: "Product not found" });
      }
  
      // Add the review to the product's reviews array
      // Create a new reviews array with the new review, handling the case when reviews is undefined
    const updatedReviews = product.reviews ? [...product.reviews, review] : [review];
  
      // Update the product with the new review
      await ProductsCollection.updateOne({ _id: new ObjectId(`${productId}`) }, { $set: { reviews: updatedReviews } });
  
      return NextResponse.json({ success: true, message: "Review added successfully" });
    } catch (error) {
      console.log('error add-review: ', error);
      return NextResponse.json({ success: false, message: "Error adding review" });
    }
  }