"use client"
import Btn from '@/Components/Btn/Btn'
import HomeProductsCarousel from '@/Components/HomeProductsCarousel/HomeProductsCarousel'
import ProductImageCarousel from '@/Components/ProductImageCarousel/ProductImageCarousel'
import ProductOptionSelect from '@/Components/ProductOptionSelect/ProductOptionSelect'
import ProductReview from '@/Components/ProductReview/ProductReview'
import {  Box, Divider, Grid, Typography } from '@mui/material'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import BreadCrumb from '@/Components/BreadCrumb/BreadCrumb'
import  Head from 'next/head'


const Index = () => {
  return (
      <>
    
            <BreadCrumb />
          <Grid sx={{maxWidth:'lg',mx:1}} className='auto' container>
              <Grid  item xs={12} sm={6} md={7} >
                <ProductImageCarousel/>

              </Grid>
              <Grid sx={{px:{xs:0,sm:1},maxHeight:'700px'}} item xs={12} sm={6} md={5}>
                <Box sx={{pt:{xs:3,sm:0}}}>
                    <Typography component={'h1'} sx={{fontWeight:500,fontSize:{xs:'2em',sm:'2.25sem'}}}>
                        FOOER NAMER BOOER2
                    </Typography>
                    <Typography className='green' component={'h2'} sx={{fontSize:'1.25em',fontWeight:700}}>
                      In Stock
                    </Typography>
                    <Typography className='gray' component={'h4'} sx={{fontWeight:400}}>
                        Electronics
                    </Typography>
                    <Typography 
                     className='clr'   component={'h1'} sx={{my:.25,fontWeight:600,fontSize:{xs:'2em',sm:'2.25sem'}}}>
                        $120
                    </Typography>
                </Box>
                <Divider></Divider>

                <Box sx={{py:2}}>
                    <Box >
                        <Typography >
                        <strong>Color:</strong> White/White
                        </Typography>
                    </Box>
                    <Box>
                       <ProductOptionSelect/>
                    </Box>
                </Box>
                
                    <Box sx={{my:2,position:'relative'}}>
                    <Btn  className='bg' sx={{gap:.5,border:'1px solid #0000003d',width:'100%',borderRadius:1}}>
                        <Typography  sx={{fontWeight:500}}>
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium praesentium magnam placeat vitae incidunt enim molestiae quod nesciunt ex pariatur.
                    </Typography>
                </Box>
              </Grid>
                <ProductReview/>
              <HomeProductsCarousel Collectiontitle={"Products"} delay={3000} data={[{title:'foo',price:12,_id:'4124',description:'',attributes:[],
            category:'Products',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},
            {title:'Wooden single drawer',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']}, {title:'Wooden single drawer',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']}]}/>
          </Grid>
      </>
  )
}

export default Index