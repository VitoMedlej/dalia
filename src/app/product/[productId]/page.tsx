"use client"
import Btn from '@/Components/Btn/Btn'
import HomeProductsCarousel from '@/Components/HomeProductsCarousel/HomeProductsCarousel'
import ProductImageCarousel from '@/Components/ProductImageCarousel/ProductImageCarousel'
// import ProductOptionSelect from '@/Components/ProductOptionSelect/ProductOptionSelect'
// import ProductReview from '@/Components/ProductReview/ProductReview'
import {  Box, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import BreadCrumb from '@/Components/BreadCrumb/BreadCrumb'
import  Head from 'next/head'
import useCart from '@/Hooks/useCart'
import { useEffect, useState } from 'react'
import { IProduct } from '@/Types/Types'
import { useParams } from 'next/navigation'
import { server } from '@/Utils/Server'
import { QuantityPicker } from '@/Components/Shared/QuantityPicker/QuantityPicker'

const Index = () => {
    const {productId} = useParams()
    const {incrementQty} = useCart()
 
    const {addToCart}= useCart()
    const [loading,setLoading] = useState(false)
    const [selectedQuantity,setSelectedQuantity] = useState(1)
    const [selectedColor,setSelectedColor] = useState('')

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
          setLoading(true)
          const req = await fetch(`${server}/api/get-by-id?id=${productId}`,{ cache: 'no-store' })
          const res = await req.json()
        
          if (res?.success && res?.product) {
          setData({product:res?.product,moreProducts : res?.moreProducts})
          setLoading(false)

          }
          setLoading(false)
          return null

        }
        catch(er) {
          console.log('er getAll: ', er);
          setLoading(false)

      
        }
      }
      useEffect(() => {
        
        InitialFetch()
        
        return  ()=> setLoading(false)

      }, [])

  return (
     
    
      <Box sx={{mt:8}}>
 
      <BreadCrumb  />
{!loading && data?.product !== undefined && data?.product?.title ?  <Grid sx={{maxWidth:'lg',mx:1,pt:{sm:15,md:15,lg:9}}} className='auto' container>
       <Grid  item xs={12}  md={7} >
         <ProductImageCarousel images={data?.product?.images}/>
   
       </Grid>
       <Grid sx={{
        border:'1px solid #00000029',
        px:{xs:1,sm:1.5}}} item xs={12}  md={5}>
         <Box sx={{pt:{xs:3,sm:0}}}>
             <Typography component={'h1'} sx={{fontWeight:400,pt:1,fontSize:{xs:'2em',sm:'2.25sem'}}}>
              {data?.product?.title || 'Loading Product Details'}
             </Typography>
             <Typography className='gray' component={'h4'} sx={{fontWeight:400}}>
               {data?.product?.category}
             </Typography>
             {/* <Typography className='green' component={'h2'} sx={{fontSize:'1.25em',fontWeight:700}}>
               In Stock
             </Typography> */}
            
          {data?.product?.inStock !== false &&   <Typography 
                 component={'h1'} sx={{my:.25,fontWeight:500,color:'green',fontSize:{xs:'1em',sm:'1.25sem'}}}>
                 ${data?.product?.price || 0}
             </Typography>}
         </Box>
   
      
         
            {data?.product?.inStock !== false ? <Box className='flex wrap ' sx={{my:2,position:'relative'}}>
              <Box sx={{width:'100%'}}>

             <QuantityPicker 
                    onChange={(e:number)=>{setSelectedQuantity(e)}}
                    
                    min={1} max={10} value={selectedQuantity}/>
              </Box>

             <Btn 
                     onClick={()=>addToCart(selectedQuantity,`${data?.product?._id}`,{title : data.product.title ,category: data.product.category,img:data.product.images[0], _id : data.product._id,price:data.product.price, selectedColor},true,true)}
             
              sx={{gap:.5,
                borderRadius:25,
             width:{xs:'100%',sm:'49%' }}}>
                 Add To Cart
                 <AiOutlineShoppingCart  fontSize={'medium'}/>
             </Btn>
             <Btn   sx={{border:'none',background:'transparent', color:'green',gap:.5,mt:.5,":hover":{color:'black'},width:{xs:'100%',sm:'49%'}}}>
                 WhatsApp 
                 <BsWhatsapp fontSize={'medium'}/>
             </Btn>
             </Box>
            :
            <Typography component={'h1'} sx={{color:'green',fontWeight:400,pt:1,fontSize:{xs:'1.5em',sm:'2.25sem'}}}>
            Out of Stock
           </Typography>
            }
         <Divider></Divider>

         <Box sx={{pt:4}}>
         { data?.product?.size && <Box >
             <Box >
                 <Typography >
                 <strong>Size:</strong>{' '}{data.product.size}
                 </Typography>
             </Box>
             {/* <Box>
                <ProductOptionSelect/>
             </Box> */}
         </Box>}

         {/* { data?.product?.colors && data?.product?.colors?.length > 0 && <Box className='flex' sx={{py:2}}>
                 <Typography >
                 <strong>Colors:</strong>{' '}
                 </Typography>
             <Box  className='flex wrap row' sx={{gap:'.1em'}}>
                 {
                 
                data?.product?.colors.map((color : string)=>{
                  
                  return <Box className='cursor' key={color}
                  onClick={()=>setSelectedColor(color)}
                  sx={{mx:1,width:'25px',height:'25px',borderRadius:'50%',boxShadow:'1px 1px 3px gray',background:color,border:`2px solid ${color === selectedColor ? 'blue':'transparent'}`}}></Box>
                 }) }
             </Box>
              
             
         </Box>} */}

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
   </Grid> : <Box className='flex auto center align-center' sx={{py:15}}>

     <CircularProgress />
   </Box>
     }
   </Box>
    
  )
}

export default Index




