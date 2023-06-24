"use client"

import HomeCategoryList from "@/Components/HomeCateogryList/HomeCategoryList"
import HomeProductCollection from "@/Components/HomeProductCollection/HomeProductCollection"
import HomeProductsCarousel from "@/Components/HomeProductsCarousel/HomeProductsCarousel"
import HomeRectangularPoster from "@/Components/HomeRectangularPoster/HomeRectangularPoster"
import HomeSquareAd from "@/Components/HomeSquareAd/HomeSquareAd"
import MainCarousel from "@/Components/MainCarousel/MainCarousel"
import ProductCard from "@/Components/ProductCard/ProductCard"
import { Box, Button, Container, Typography } from "@mui/material"


export default function Home() {
  return (
      <Box>
        <Container disableGutters className='wrap' sx={{px:1,maxWidth:'xl',display:'flex'}}>
        <Box sx={{mt:'2em',mr:'.1em',width:{sm:'25%',lg:'19%'},flexDirection:'column',display:{xs:'none',md:'flex'}}}>
        <Box className='bg white' sx={{
                px:1,
                py:2,width:'100%',background:'white'}}>
              
                <Typography sx={{fontWeight:'500',px:1}}>
                  All Categories
                </Typography>
             
              </Box>
            {[1,2,3,4].map(i=>{
              return <Box key={i} className='flex shadow cursor' sx={{
                px:1,
                py:2,width:'100%',background:'white'}}>
                <Box sx={{height:'20px',width:'20px'}}>
                <img src="https://itaouielectronics.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-01-at-15.13.55-1-150x150.jpg" alt="" className="img" />
               </Box>
                <Typography sx={{fontWeight:'500',px:1}}>
                  Item foo
                </Typography>
             
              </Box>
            })}
          </Box>
          <MainCarousel/>
         
          <Box className='wrap gap1 justify-center' sx={{display:{xs:'flex',sm:'none'}}}>
            <Typography sx={{width:'100%',fontWeight:'600',py:1}}>
              Browse Collections
            </Typography>
            {[1,2,3,4,5,6,7,8].map(i=>{
                return <Box key={i} className='cursor' sx={{width:{xs:'23%'}}}>
                        <img src="https://cdn.shopify.com/s/files/1/0736/4571/9865/products/335960041594900903.png?crop=center&height=240&v=1678468381&width=240" alt="" className="img" />
          
                </Box>
            })}
          </Box>
            <HomeProductCollection/>
            <HomeSquareAd  center img={"https://cdn.shopify.com/s/files/1/0736/4571/9865/files/ABOUT_US_2.jpg?v=1678880362&width=1540"}/>
            
            {/* <HomeCategoryList/> */}
            <HomeProductsCarousel Collectiontitle={"fooer"} delay={3000} data={[{title:'foo',price:12,_id:'4124',description:'',attributes:[],
            category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},
            {title:'Wooden single drawer',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']}, {title:'Wooden single drawer',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']},{title:'foo',price:12,_id:'4124',description:'',attributes:[],category:'ffoo',images:['https://itaouielectronics.com/wp-content/uploads/2021/08/wooden-single-drawer-2.jpg']}]}/>


        </Container>
            <HomeSquareAd fullscreen  img={"https://cdn.shopify.com/s/files/1/0736/4571/9865/files/ABOUT_US_2.jpg?v=1678880362&width=1540"}/>
      </Box>
  )
}
