"use client"
import Btn from '@/Components/Btn/Btn'
import HomeProductsCarousel from '@/Components/HomeProductsCarousel/HomeProductsCarousel'
import ProductImageCarousel from '@/Components/ProductImageCarousel/ProductImageCarousel'
import ProductOptionSelect from '@/Components/ProductOptionSelect/ProductOptionSelect'
import {  Box, Divider, Grid, Typography } from '@mui/material'

const Index = () => {
  return (
      <>
          <Grid sx={{maxWidth:'lg',mt:8}} container>
              <Grid  item xs={12} sm={6} md={7} >
                <ProductImageCarousel/>

              </Grid>
              <Grid sx={{px:{xs:1,sm:1.5},maxHeight:'700px'}} item xs={12} sm={6} md={5}>
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
                    <Btn  className='bg' sx={{border:'1px solid #0000003d',width:'100%',borderRadius:1}}>
                        <Typography  sx={{fontWeight:600}}>
                        Add To Cart
                        </Typography>
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
              <Grid xs={12} sx={{mt:4}}>
              <Divider sx={{width:'100%'}}></Divider>
                <Box sx={{mx:1}}>
                <Typography sx={{fontWeight:600,pb:.25,pt:1.2}}>
                        Product Review:
                    </Typography>
                    <Box>
                        <Typography className='gray' component={'p'}>
                        No reviews yet
                        </Typography>
                    </Box>
                </Box>
              </Grid>
              <HomeProductsCarousel Collectiontitle={"Products"} delay={3000} data={[{title:'foo',price:12,_id:'4124',description:'',attributes:[],
            category:'Products',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},
            {title:'Wooden single drawer',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']}, {title:'Wooden single drawer',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']}]}/>
          </Grid>
      </>
  )
}

export default Index