// "use client"
import Preloader2 from "@/Components/Preloader2"
// import type {  NextApiResponse}
// from 'next';
// import {NextResponse } from 'next/server';
// import {type NextRequest} from 'next/server';



// const Page = (ctx : any) => {
  const Page = async(ctx : any) => {
  
  try {
    const {category} = ctx?.params
    const {type,search,page} = ctx?.searchParams;
    // console.log('subcategory: ', subcategory);
    // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-cate?category=${category ? category : 'collection'}&type=${type ? type : null}&page=${0}&search=${search ? search : null}&subcategory=${subcategory ? encodeURIComponent(subcategory) : null}`)
    // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-cate?category=${category ? category : 'collection'}&type=${type ? type : null}&page=${0}&search=${search ? search : null}&subcategory=${subcategory ? encodeURIComponent(subcategory) : null}`,{cache:'no-store',next:{revalidate:0}})
  //   const req = await fetch(`${process.env.NEXT_PUBLIC_URL}
  //   /api/get-cate?category=${category ? encodeURIComponent(category) : 'collection'}
  //   &type=${type ? encodeURIComponent(type) : null}
  //   &page=${Number(page) || 0}&search=${search ? search : null}`,{
  //     cache: 'no-store',
  //   next:{revalidate:100}
  //  })
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-cate?category=
  ${category ? category : 'collection'}&type=${type ? encodeURIComponent(type) : null}
  &page=${Number(page - 1)}&search=${search ? search : null}`
  ,{cache:'no-store'
  // ,next:{revalidate:0}

})
    const res = await req.json();    
    // const res = {data:{totalPages:0,products:null}}
    // const totalPages = 1;
    // const products = {}
 

    return (<Preloader2 totalPages={res?.data?.totalPages || 1} data={res?.data?.products || null}/>)
  }
catch (err) {
  console.log('err: ', err);
  
  return (<Preloader2 totalPages={1} data={{totalPages:0,products:null}}/>)

}
}

export default Page

