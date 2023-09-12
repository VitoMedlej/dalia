"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'

const HomeProductCollection = ({products} : {products:IProduct[] | never[]}) => {
 const router = useRouter()
  return (
    <Box sx={{my:4}} className='center auto'>
            <Typography
                className='sectionTitle  text-center center auto box'
                sx={{
                  pb:'.5em',
                px:1,
                pt:9,
                  textAlign:'center !important',
                fontSize: {
                    xs: '1.42em',
                    sm: '2em'
                },
                fontWeight: '600'
            }}>
                View Our Latest Products
            </Typography>
            <Btn v2
            className='auto shadow1' 
            onClick={()=>router.push('/collection/products')}
            >
              View All
            </Btn>
              <Box sx={{mb:2,mt:4}} className='flex wrap gap1 justify-center'>
                  {products && products?.length > 0 && products.map(i=>{

                      return <ProductCard key={i?._id} inStock={i?.inStock} title={i?.title} price={i?.price} _id={i?._id} 
                       images={i?.images?.length > 0 && i?.images[0]?.length > 3 ? i?.images : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90cK_Js0H-conZ_T6tHjPHtCXP8e-e7MHt69YkHWej5n90FlRvLFUMC2CmRt6UPy9dYc&usqp=CAU']}
                       category={i?.category}/>
                  })}
              </Box>
            </Box>
  )
}

export default HomeProductCollection