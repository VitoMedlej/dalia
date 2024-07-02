


import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
  try {
    const { searchParams } = new URL(req.nextUrl);
    // const {category} = ctx.params;
    const category = searchParams.get('category')
    const type = searchParams.get('type')
    const search = searchParams.get('search')
    const page = searchParams.get('page')
    
    console.log('search: ', search);

    // const {page} = ctx?.searchParams;
    // const {type} = ctx?.searchParams;
    const pageSize = 12; // Number of items per page
    
    // const req = await fetch(`${server}/api/fetch-all?page=${pageNB}&category=${category
    //     ? `${category}`
    //     : 'collection'}`, { cache: 'no-store' })
    // const res = await req.json()
    
    
    // const { nextUrl } = req;
    // const category = nextUrl.searchParams.get('category');
    // const page = nextUrl.searchParams.get('page');
            // let page = 0;
            // let category = null
        // const { searchParams } = new URL(req.url);
        // let category=  searchParams.get('category') || null
        // let page=  searchParams.get('page') || 0
    
        
        let filterByCate = !category || category === 'collection' || category === 'category' ? null : decodeURIComponent(`${category}`.toLocaleLowerCase())
        let filterByType = !type || type === null || type == 'null'  ? null : decodeURIComponent(type).toLocaleLowerCase()
        let filterBySearch = search  && search != 'null' && search != null && search?.length > 1; 
        
    const ProductsCollection = await client
        .db("DALIA")
        .collection("Products");
    let products : any = []
    
    

    
    const filterQuery = () => {
    
      if (filterBySearch) {
        return {
      $or: [
          { title: { $regex: search, $options: 'i' } },
          { category: { $regex: search, $options: 'i' } },
          // { description: { $regex: search, $options: 'i' } },
      ]
    } 
  }
  
  if (filterByCate && filterByType) {
    return { category: {
      $regex: new RegExp(
          `^${filterByCate?.toLocaleLowerCase()}$`,
          'i'
        ),
      },
      type : {
        $regex: new RegExp(
          `^${decodeURIComponent(filterByType)?.toLocaleLowerCase()}$`,
          'i'
        ),
      }}
      } 
      if (filterByCate) {
        return  {
          category: {
            $regex: new RegExp(
              `^${filterByCate?.toLocaleLowerCase()}$`,
              'i'
              ),
      }}
    }
    else {
        return {}
      }
    }
    const countQuery = await ProductsCollection.count(filterQuery());
    console.log('filterQuery: ', filterQuery());
    
    const totalPages = Number(Math.ceil(countQuery / pageSize)); // Total number of pages
    const skip = Number(page) * 12
 
    
    const ProductsQuery =
          await ProductsCollection.find(filterQuery()).sort({_id: -1})
        .skip(Number(skip) ? Number(skip) : 0)
        .limit(12)
    
    await ProductsQuery.forEach((doc : any) => {
    
        products.push(doc)
        
      });
    if (!products || products?.length < 1  ) {
      throw 'ERROR: Could not find any products'
    }
    return NextResponse.json({
        success: true,
        data: {
          totalPages,
            products
        }
    });
}

catch (error) {
    console.log('error get-cate: ', error);
    return NextResponse.json({
        success: false,
        data: {
            products : null,
            featuredProducts : null
        }
    });
}
}


export const dynamic = 'force-dynamic'