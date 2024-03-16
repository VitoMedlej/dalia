"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'
import Product2 from '../ProductCard/Product2'

const HomeProductCollection = ({products} : {products:IProduct[] | never[]}) => {
 const router = useRouter()
  return (
    <Box sx={{ maxWidth:'lg',my:4}} className='center auto'>
           
           <Box className="flex justify-between auto" sx={{px:1,py:8,maxWidth:'lg'}}>
           <Typography
            component='h1'
                className='clr2 center text-center  box'
                sx={{
             
                fontSize: {
                    xs: '1.52em',
                    sm: '1.52em'
                },
                padding:.5,
                fontWeight: '600'
            }}>
            Our Best Sellers
            </Typography>

<Btn 
sx={{border:'none',
':hover':{background:'transparent'},
color:'black',background:'white'}}
onClick={()=>router.push('/collection/products')}
>
   Explore More
</Btn>
</Box>

              <Box sx={{mb:2,mt:0,
              mx:{xs:'auto',md:1}
              ,
              justifyContent:{xs:'center',sm:'space-between'}
            }} className='flex wrap   '>
                  {products && products?.length > 0 && products?.slice(0,4).map(i=>{

                    return <Product2
                    sx={{my:1}}
                    width={
                        {
                            xs: '95%',
                            sm: '44%',
                            md:'21%',
                            lg:'21%'
                        }
                    }
                    stock={i.stock}

                    newPrice={i?.newPrice}
                    sizes={i?.sizes ? i?.sizes : null}
                          key={i?._id} inStock={i?.inStock} title={i?.title} price={i?.price} _id={i?._id} 
                           images={i?.images?.length > 0 && i?.images[0]?.length > 3 ? i?.images : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90cK_Js0H-conZ_T6tHjPHtCXP8e-e7MHt69YkHWej5n90FlRvLFUMC2CmRt6UPy9dYc&usqp=CAU']}
                           category={i?.category}
                   />
                //       return <ProductCard 
                //       stock={i.stock}

                // newPrice={i?.newPrice}
                // sizes={i?.sizes ? i?.sizes : null}
                //       key={i?._id} inStock={i?.inStock} title={i?.title} price={i?.price} _id={i?._id} 
                //        images={i?.images?.length > 0 && i?.images[0]?.length > 3 ? i?.images : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90cK_Js0H-conZ_T6tHjPHtCXP8e-e7MHt69YkHWej5n90FlRvLFUMC2CmRt6UPy9dYc&usqp=CAU']}
                //        category={i?.category}/>
                  })}
              </Box>
            </Box>
  )
}

export default HomeProductCollection