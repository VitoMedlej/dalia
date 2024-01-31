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
           
           <Box className="flex justify-between auto" sx={{px:1,pt:8,pb:4,maxWidth:'lg'}}>

<Typography
component={'h1'}
    className='sectionTitle   box'
    sx={{
 
    fontSize: {
        xs: '1.2em',
        sm: '1.4em'
    },
    padding:.5,
    fontWeight: '300'
}}>
 Our Products
</Typography>

<Btn 
sx={{border:'none',color:'black',background:'white'}}
onClick={()=>router.push('/collection/products')}
>
   Explore More
</Btn>
</Box>

              <Box sx={{mb:2,mt:4}} className='flex wrap gap1 justify-center'>
                  {products && products?.length > 0 && products.map(i=>{

                      return <ProductCard 
                newPrice={i?.newPrice}
                sizes={i?.sizes ? i?.sizes : null}
                      key={i?._id} inStock={i?.inStock} title={i?.title} price={i?.price} _id={i?._id} 
                       images={i?.images?.length > 0 && i?.images[0]?.length > 3 ? i?.images : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90cK_Js0H-conZ_T6tHjPHtCXP8e-e7MHt69YkHWej5n90FlRvLFUMC2CmRt6UPy9dYc&usqp=CAU']}
                       category={i?.category}/>
                  })}
              </Box>
            </Box>
  )
}

export default HomeProductCollection