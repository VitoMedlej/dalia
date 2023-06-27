"use client"
import React from 'react'
import { Box,  Container, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import HomeSquareAd from './HomeSquareAd/HomeSquareAd'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'

const PreLoader = ({data}:any) => {
    const router= useRouter()
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
     
      <Box className='wrap gap1 space-evenly' sx={{my:1,display:{xs:'flex',sm:'none'}}}>
        <Typography sx={{width:'100%',fontWeight:'600',py:1}}>
          Browse Collections
        </Typography>
        {[{img:'https://mysobol.com/wp-content/uploads/2022/09/Food-and-Beverage-Industry-Overview-Categories.jpg',category:'food and bevrages'},
      {img:'https://mysobol.com/wp-content/uploads/2022/09/Food-and-Beverage-Industry-Overview-Categories.jpg',category:'food and bevrages'},
      {img:'https://mysobol.com/wp-content/uploads/2022/09/Food-and-Beverage-Industry-Overview-Categories.jpg',category:'food and bevrages'}  
      ].map(i=>{
            return <Box

            onClick={()=>router.push(`${i?.category}`)}
            key={i?.img} className='cursor' sx={{borderRadius:'50%',height:'90px',width:{xs:'90px'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'50%',}} className="img" />
      
            </Box>
        })}
      </Box>
        <HomeProductCollection products={ data?.products }/>
        <HomeSquareAd  center img={"https://cdn.shopify.com/s/files/1/0736/4571/9865/files/ABOUT_US_2.jpg?v=1678880362&width=1540"}/>
        
        {/* <HomeCategoryList/> */}
        <HomeProductsCarousel Collectiontitle={"Featured Products"} delay={3000} data={data?.featuredProducts}/>


    </Container>
        <HomeSquareAd fullscreen  img={"https://cdn.shopify.com/s/files/1/0736/4571/9865/files/ABOUT_US_2.jpg?v=1678880362&width=1540"}/>
        <ContactSection/>
  </Box>
  )
}

export default PreLoader