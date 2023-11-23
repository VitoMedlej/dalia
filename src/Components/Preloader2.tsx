"use client"
import React from 'react'
import {Box, Container,  Pagination, Typography} from "@mui/material"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { server } from "@/Utils/Server"
import FilterSection from './CollectionPage/FilterSection/FilterSection'
import { IProduct } from '@/Types/Types'
import BreadCrumb from './BreadCrumb/BreadCrumb'
import ProductCard from './ProductCard/ProductCard'
import SearchInput from './Navbar/SearchInput'

const Preloader2 = ({data,totalPages}:any) => {
   
    // const [pageNB,setPageNB] = useState(0)
    const router = useRouter()
    const [products,setProducts] = useState<any>()
    useEffect(() => {
      
        // if (!products) {
            setProducts(data)
        // }
      
    }, [data])
    
    const {category} = useParams() 
    const searchParams = useSearchParams();
    const type =  searchParams.get('type')
    const subCategory   =  searchParams.get('subCategory')



    // const {type} = useSearchParams();




    const fetchData = async (val:number) => {
    const url =  `/api/get-cate?category=${category ? category : 'collection'}&subCategory=${subCategory ? encodeURIComponent(subCategory) : null}&page=${Number(val - 1) || 0}&type=${type ? type : null}`  ;
    const req = await fetch(`${server}${url}`,{cache:'no-store', next: { revalidate: 0 }})
    const res = await req.json()
        
            setProducts(res?.data?.products ? res?.data?.products : [])
            totalPages = res?.data?.totalPages;
            if (window) {
                window.scrollTo(0,0)
            }

      };
      const [options,setOptions] = useState({
          price : [1,100000],
          sort : 'latest',
          category : 'collection',
          // query : '',
          
      })
      const handleSubmit = async (reset?:boolean) => {
        if (reset) {
        //    return router.push('/collection/products')
        setOptions({
            price : [1,100000],
            sort : 'latest',
            category : 'collection',
        
            
        })
    }
        const url =   `/api/sort?min=${options.price[0]}&max=${options.price[1]}&sort=${options.sort}&category=${options?.category || 'collection'}`  ;
        const req = await fetch(`${server}${url}`,{cache:'no-store', next: { revalidate: 0 }})
        const res = await req.json()
        // if () {

            setProducts(res?.data?.products ? res?.data?.products : [])
        // }
    }
  
    // const handlePagination = async (val:number) => {
    //     // router.replace(`${server}/${category ?category : 'collection'}/products?page=${val ? val : 0}`)
    //     fetchData()
    // }
    // const [data,setData] = useState< {
    //     products: IProduct[] | never[] ; 
       
    // }>({
    //     products : [],
       
    //   })
 
  return (
    <Container sx={{mt:2}} disableGutters maxWidth='lg'>
    <Box
    className='flex  items-center wrap'
        sx={{
        mb:4,
        width: '100%',
        minHeight: '100px'
    }}>
    <SearchInput 
    // handleSubmit={handleSubmit}
    sx={{mx:1,mb:0,width:{xs:'95%',sm:'250px'},display:'flex !Important'}} mobile/>
    <FilterSection handleSubmit={handleSubmit} options={options} setOptions={setOptions} setProducts={setProducts}/>
    </Box>
    {/* <BreadCrumb></BreadCrumb> */}
   

    <Box className='flex wrap' sx={{
        px: 1
    }}>
        {products && products?.length > 0 ? products.map((i:IProduct) => {
            return <ProductCard
            width={{xs:'45%',sm:'32%'}}
            key={i?._id}
            inStock={i?.inStock 
            }
                _id={i._id}
                title={i.title}
                price={i.price}
                images={i.images}
                category={i.category}/>
        })
: <Typography>
No products found, try a different category...
</Typography>}
    </Box>
    <Pagination
        onChange={(e, val) => {
            fetchData(val)
    }}
        sx={{
        my: 3
    }}
        count={totalPages > 1 
        ? totalPages
        : 1}
        className='flex center '/>


</Container>
  )
}

export default Preloader2