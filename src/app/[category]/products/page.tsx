"use client"

import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb"
import FilterSection from "@/Components/CollectionPage/FilterSection/FilterSection"
import ProductCard from "@/Components/ProductCard/ProductCard"
import { IProduct } from "@/Types/Types"
import { server } from "@/Utils/Server"
import {Box, Container,  Pagination, Typography} from "@mui/material"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"



const Page = () => {
  const [pageNB,setPageNB] = useState(0)
  const router = useRouter()
  const {category} = useParams() 



    const [data,setData] = useState< {
        products: IProduct[] | never[] ; 
       
    }>({
        products : [],
       
      })
    
    
       const InitialFetch = async () => {
        try {
      
          const req = await fetch(`${server}/api/fetch-all?page=${pageNB}&category=${ category.replace(/-/g, ' ')}`)
          const res = await req.json()
        
          if (res?.success && res?.data) {
            setData(res?.data)
          }
          return null
        }
        catch(er) {
          console.log('er getAll: ', er);
      
        }
      }
      useEffect(() => {
        
        InitialFetch()
    
      }, [])
      
    const counted = 1;
    const handlePagination = async (val:number) => {

    }
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
                {data?.products && data?.products?.length > 0 ? data?.products.map(i => {
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

export default Page