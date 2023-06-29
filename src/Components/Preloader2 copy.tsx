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

const Preloader2 = (data:any) => {
    const [pageNB,setPageNB] = useState(0)
    const router = useRouter()
    const {category} = useParams() 
    const counted = 1;
    const handlePagination = async (val:number) => {

    }
    // const [data,setData] = useState< {
    //     products: IProduct[] | never[] ; 
       
    // }>({
    //     products : [],
       
    //   })
  return (
    <Container disableGutters maxWidth='lg'>
    <Box
        sx={{
        width: '100%',
        minHeight: '100px'
    }}>
        <FilterSection/>
    </Box>
    <BreadCrumb></BreadCrumb>
   

    <Box className='flex wrap' sx={{
        px: 1
    }}>
        {data?.products && data?.products?.length > 0 ? data?.products.map((i:IProduct) => {
            return <ProductCard
            key={i?._id}
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
        handlePagination(val)
    }}
        sx={{
        my: 3
    }}
        count={counted > 1
        ? counted
        : 1}
        className='flex center '/>


</Container>
  )
}

export default Preloader2