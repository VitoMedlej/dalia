"use client"
import Btn from '@/Components/Btn/Btn'
import HomeProductsCarousel from '@/Components/HomeProductsCarousel/HomeProductsCarousel'
import ProductImageCarousel from '@/Components/ProductImageCarousel/ProductImageCarousel'
// import ProductOptionSelect from '@/Components/ProductOptionSelect/ProductOptionSelect'
// import ProductReview from '@/Components/ProductReview/ProductReview'
import {  Box, Divider, Grid, Typography } from '@mui/material'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import BreadCrumb from '@/Components/BreadCrumb/BreadCrumb'
import  Head from 'next/head'
import useCart from '@/Hooks/useCart'
import { useEffect, useState } from 'react'
import { IProduct } from '@/Types/Types'
import { useParams } from 'next/navigation'
import { server } from '@/Utils/Server'

const Index = () => {
    const {productId} = useParams()
 
    const {addToCart}= useCart()
    const [data,setData] = useState<{
      product: IProduct | any ;
      moreProducts: IProduct[] | never[];
    }>
    ({
      product : null,
      moreProducts : []
    })
    
    
       const InitialFetch = async () => {
        try {
      
          const req = await fetch(`${server}/api/get-by-id?id=${productId}`,{ cache: 'no-store' })
          const res = await req.json()
        
          if (res?.success && res?.product) {
            setData({product:res?.product,moreProducts : res?.moreProducts})
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

    
  return (
     
    
      <>
 
      <BreadCrumb />
{data?.product !== undefined &&   <Grid sx={{maxWidth:'lg',mx:1}} className='auto' container>
       <Grid  item xs={12} sm={6} md={7} >
         <ProductImageCarousel images={data?.product?.images}/>
   
       </Grid>
       <Grid sx={{px:{xs:1,sm:1.5}}} item xs={12} sm={6} md={5}>
         <Box sx={{pt:{xs:3,sm:0}}}>
             <Typography component={'h1'} sx={{fontWeight:500,fontSize:{xs:'2em',sm:'2.25sem'}}}>
              {data?.product?.title || 'Product Name'}
             </Typography>
             <Typography className='green' component={'h2'} sx={{fontSize:'1.25em',fontWeight:700}}>
               In Stock
             </Typography>
             <Typography className='gray' component={'h4'} sx={{fontWeight:400}}>
               {data?.product?.category}
             </Typography>
             <Typography 
              className='clr'   component={'h1'} sx={{my:.25,fontWeight:600,fontSize:{xs:'2em',sm:'2.25sem'}}}>
                 ${data?.product?.price || 0}
             </Typography>
         </Box>
         <Divider></Divider>
   
       { data?.product?.size && <Box sx={{py:2}}>
             <Box >
                 <Typography >
                 <strong>Size:</strong>{' '}{data.product.size}
                 </Typography>
             </Box>
             {/* <Box>
                <ProductOptionSelect/>
             </Box> */}
         </Box>}
         
             <Box sx={{my:2,position:'relative'}}>
             <Btn 
                     onClick={()=>addToCart(`${data?.product?._id}`,{title : data.product.title ,category: data.product.category,img:data.product.images[0], _id : data.product._id,price:data.product.price},true)}
             
             className='bg' sx={{gap:.5,border:'1px solid #0000003d',width:'100%',borderRadius:1}}>
                 <Typography 

                 sx={{fontWeight:500}}>
                 Add To Cart
                 </Typography>
                 <AiOutlineShoppingCart  fontSize={'medium'}/>
             </Btn>
             <Btn  v2 sx={{color:'white',gap:.5,mt:.5,border:'1px solid green',background:'green',":hover":{color:'green'},width:'100%',borderRadius:1}}>
                 <Typography  sx={{fontWeight:500}}>
                 WhatsApp 
                 </Typography>
                 <BsWhatsapp fontSize={'medium'}/>
             </Btn>
             </Box>
         <Box sx={{pt:4}}>
             <Typography sx={{fontWeight:600,py:.25}}>
                 Product Description:
             </Typography>
             <Typography className='gray'>
   {data?.product?.description}
             </Typography>
         </Box>
       </Grid>
         {/* <ProductReview/>  */}
       <HomeProductsCarousel Collectiontitle={"Shop More Products"} delay={3000} data={data?.moreProducts} />
   </Grid> }
   </>
    
  )
}

export default Index




