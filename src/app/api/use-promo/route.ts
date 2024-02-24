import client from '@/database/mongodb';
import { ObjectId } from 'mongodb';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    const { order } = await req.json();
   

    if (!order || !order?.code || !order?.total) {
      return NextResponse.json({ success: false, message: 'Missing order parameter' });
    }

    // Check promo code validity
    const Codes = await client.db('DALIA').collection('Coupons');
    const retrievedCode = await Codes.findOne({ code: order.code });
    console.log('retrievedCode: ', retrievedCode);

    if (!retrievedCode) {
      return NextResponse.json({ success: false, message: 'Invalid promo code' });
    }

    // Continue with the rest of your logic...
    const validationMessage = await isValidPromoCode(order,retrievedCode);
    console.log('validationMessage: ', validationMessage);

    if (validationMessage !== 'Valid') {
      return NextResponse.json({ success: false, message: validationMessage });
    }


      const discountedPrice =  await applyPromoCode(order, retrievedCode)
      console.log('discountedPrice: ', discountedPrice);

    return NextResponse.json({ success: true, discountedPrice,message: 'Promo code is valid' });

  } catch (e) {
    console.error('Error in use promo route', e);
    return NextResponse.json({ success: false, message: 'Internal server error' });
  }
}

export const dynamic = 'force-dynamic';

export interface PromoType {
    _id: string;
  code: string;
  discountType: string;
  discountValue: number;
  expirationDate: string;
  isReusable: boolean;
  usageCount: number;
  usageLimit: number;
  isActive: boolean;
  description: string;
  excludedCates: never[];
  minimumOrderAmount: number;
  createdAt: Date;
}

async function isValidPromoCode(order : any,promoCode: PromoType) {
  try {
    // Check if the promo code is active
    if (!promoCode.isActive) {
      return 'Inactive promo code';
    }

    // Check if the promo code has expired
    const expirationDate = new Date(promoCode.expirationDate);
    const currentDate = new Date();

    if (expirationDate < currentDate) {
      return 'Expired promo code';
    }

    // Check if the promo code has reached its usage limit
    if (promoCode.usageLimit && Number(promoCode.usageLimit) <= Number(promoCode.usageCount)) {
      return 'Promo code usage limit exceeded';
    }
    if (
        Number(promoCode.minimumOrderAmount) > order.total 
    ){
      return 'Does not match minimum order amount';

    }
    // Your additional validation logic here...

    return 'Valid'; // If all conditions are met, the promo code is valid

  } catch (error) {
    console.error('Error in promo code validation', error);
    return 'Error in promo code validation'; // If an error occurs, consider the promo code as invalid
  }
}

// Function to update usageCount and calculate discount price
async function applyPromoCode(order: any, promoCode: PromoType) {
  try {
    console.log('promoCode: ', promoCode);
    // Calculate discount price based on discountType and discountValue
    let discountedPrice;

    if (promoCode.discountType === 'percentage') {
      // Discount is a percentage
      const discountPercentage = promoCode.discountValue / 100;
      discountedPrice = Number(order.total) - Number(order.total) * discountPercentage;
    } else if (promoCode.discountType === 'fixed') {
      // Discount is a fixed amount
      discountedPrice = Number(order.total) - promoCode.discountValue;
    } else {
      // Unknown discount type
      throw new Error('Unknown discount type');
    }

    // Ensure the discounted price is not less than zero
    discountedPrice = Math.max(discountedPrice, 0);

    console.log('finalPrice: ', discountedPrice); // Log the discountedPrice as finalPrice

    return discountedPrice; // Return discountedPrice as finalPrice
  } catch (error) {
    console.error('Error applying promo code', error);
    throw new Error('Error applying promo code');
  }
}
