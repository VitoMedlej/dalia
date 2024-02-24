"use client"
import Btn from '@/Components/Btn/Btn'
import HomeProductsCarousel from '@/Components/HomeProductsCarousel/HomeProductsCarousel'
import ProductImageCarousel from '@/Components/ProductImageCarousel/ProductImageCarousel'
// import ProductOptionSelect from '@/Components/ProductOptionSelect/ProductOptionSelect'
// import ProductReview from '@/Components/ProductReview/ProductReview'
import {  Box, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
// import BreadCrumb from '@/Components/BreadCrumb/BreadCrumb'
// import  Head from 'next/head'
import useCart from '@/Hooks/useCart'
import { useEffect, useState } from 'react'
import { IProduct } from '@/Types/Types'
import { useParams } from 'next/navigation'
import { server } from '@/Utils/Server'
import { QuantityPicker } from '@/Components/Shared/QuantityPicker/QuantityPicker'
import ProductOptionSelect from '@/Components/ProductOptionSelect/ProductOptionSelect'
import SelectWeight from '@/Components/SelectWeight/SelectWeight'
import ProductReview from '@/Components/ProductReview/ProductReview'

const Index = () => {
    const {productId} = useParams()
    const {incrementQty} = useCart()
 
    const {addToCart}= useCart()
    const [loading,setLoading] = useState(false)
    const [selectedQuantity,setSelectedQuantity] = useState(1)
    // const [productselectedSize,setproductselectedSize] = useState('')

    const [data,setData] = useState<{
      product: IProduct | any ;
      moreProducts: IProduct[] | never[];
    }>
    ({
      product : null,
      moreProducts : []
    })
    console.log('data: ', data);
    
    
    const [selectedSize, setselectedSize] = useState({size:'',price:''});
    
       const InitialFetch = async () => {
        try {
          setLoading(true)
          const req = await fetch(`${server}/api/get-by-id?id=${productId}`,{ cache: 'no-store' })
          const res = await req.json()
        
          if (res?.success && res?.product) {
          setData({product:res?.product,moreProducts : res?.moreProducts})
          
          setLoading(false);
        
    
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
      console.log('parseFloat(data?.product?.size): ', parseFloat(data?.product?.size));
  return (
     
    
      <Box sx={{mt:4}}>
 
{!loading && data?.product !== undefined && data?.product?.title ?  <Grid sx={{maxWidth:'lg',mx:1,pt:{sm:15,md:15,lg:9}}} className='auto' container>
       <Grid  item xs={12}  md={7} >
         <ProductImageCarousel images={data?.product?.images}/>
   
       </Grid>
       <Grid sx={{
        // border:'1px solid #00000029',
        px:{xs:1,sm:1.5}}} item xs={12}  md={5}>
         <Box sx={{pt:{xs:3,sm:0}}}>
             <Typography component={'h1'} sx={{fontWeight:500,pt:1,fontSize:{xs:'2em',sm:'2.25sem',md:'2.8em'}}}>
              {data?.product?.title || 'Loading Product Details'}
             </Typography>
           { Number(data?.product?.stock) !== 0 && data?.product?.inStock !== false ? 
           <Typography className='green' component={'h1'} sx={{fontSize:'1.05em',fontWeight:300}}>
               In Stock 
             </Typography>
            : 
            <Typography className='red' component={'h1'} sx={{color:'red',fontSize:'1.25em',fontWeight:300}}>
               Out of stock
             </Typography>
            }
          { Number(data?.product?.stock) > 0 && data?.product?.inStock !== false &&   <Typography 
                 component={'h1'} sx={{my:.25,fontWeight:500,color:'green',fontSize:{xs:'1.25em',sm:'1.55em'}}}>
                 ${
                 selectedSize?.price ||
                 data?.product?.price || 0}
             </Typography>}
             
            
         </Box>
   
      
         
            {  Number(data?.product?.stock)> 0 &&data?.product?.inStock !== false ? <Box className='flex wrap ' sx={{my:2,position:'relative'}}>
              <Box sx={{width:{xs:'max-content'}}}>

       
              </Box>
            
     
           {data?.product?.mutlisize &&   <SelectWeight
              selectedSize={selectedSize}
              setselectedSize={setselectedSize}
              sizes={data?.product?.mutlisize && data?.product?.sizes && data?.product?.sizes?.length > 0 ?
               data?.product?.sizes:  
               [{price:Number(data?.product?.price)
        
               ,
               size:parseFloat(data?.product?.size)}]}/>}
     
         
            

     <Box className='flex wrap ' sx={{mt:1,position:'relative'}}>
              <Box className='flex row center items-center w100' sx={{width:{xs:'max-content',sm:'100%'}}}>
             
             <QuantityPicker 
                    onChange={(e:number)=>{setSelectedQuantity(e)}}
                    
                    min={1} max={data?.product?.stock ? Number(data?.product?.stock) : 10} value={selectedQuantity}/>
            
             <Btn 
                     onClick={()=>addToCart(selectedQuantity,`${data?.product?._id}`,{title : data.product.title ,category: data.product.category,img:data.product.images[0], _id : data.product._id,price:selectedSize?.price ? selectedSize?.price : data?.product?.price, productselectedSize:selectedSize?.size},true,true)}
             
              sx={{gap:.5,
                borderRadius:0,
             width:{xs:'100%',sm:'100%'}}}>
                 ADD TO CART
                
             </Btn>
             </Box>
            

             <a 
             className='center  text-center'
             style={{textDecoration:'none',width:'100%'}} href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}?text=I would like to know more about: ${data?.product?.title || 'Product Name'}`} target='_blank' rel='noopener'>


<Btn      sx={{gap:.5,
                borderRadius:0,
                mt:1,
                border:'1px solid black',
                background:'white',color:'black',
             width:{xs:'100%'}}}>
                 BUY IT NOW 
             </Btn>
             </a>
          

             </Box>
          

             </Box>
            :
            ''
            }
         <Divider></Divider>

         <Box sx={{pt:4}}>
         {/* { data?.product?.size && <Box >
             <Box sx={{pb:1}}>
                 <Typography >

                Product Weight:{' '}
                  <strong>
                 {data?.product?.size}
                  </strong>
                 </Typography>
             </Box>
            
         </Box>} */}

         {/* { data?.product?.colors && data?.product?.colors?.length > 0 && <Box className='flex' sx={{py:2}}>
                 <Typography >
                 <strong>Colors:</strong>{' '}
                 </Typography>
             <Box  className='flex wrap row' sx={{gap:'.1em'}}>
                 {
                 
                data?.product?.colors.map((color : string)=>{
                  
                  return <Box className='cursor' key={color}
                  onClick={()=>setproductselectedSize(color)}
                  sx={{mx:1,width:'25px',height:'25px',borderRadius:'50%',boxShadow:'1px 1px 3px gray',background:color,border:`2px solid ${color === productselectedSize ? 'blue':'transparent'}`}}></Box>
                 }) }
             </Box>
              
             
         </Box>} */}
           { data?.product?.Category && <Box >
             <Box >
                 <Typography >
                {data.product.category}
                 </Typography>
             </Box>
            
         </Box>}

            {/* PRODUCT DESCRIPTION: */}
             {/* <Typography className='gray' sx={{pt:.5,whiteSpace:'pre-wrap',maxWidth:'100%'}}>
   {data?.product?.description}
             </Typography> */}
              <Typography 
      className='gray' 
      sx={{whiteSpace:'pre-wrap',maxWidth:'100%'}}
      dangerouslySetInnerHTML={{ __html: data?.product?.description }}
    />
         </Box>
       </Grid>
         {/* <ProductReview/>  */}
         <ProductReview data={data} setData={setData} reviews={data?.product?.reviews || null}/> 
       <HomeProductsCarousel Collectiontitle={"Shop More Products"} delay={3000} data={data?.moreProducts} />
   </Grid> : <Box className='flex auto center align-center' sx={{py:15}}>

     <CircularProgress />
   </Box>
     }
   </Box>
    
  )
}

export default Index




