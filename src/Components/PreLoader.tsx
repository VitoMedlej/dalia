"use client"
import React from 'react'
import { Box,  Container, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import HomeSquareAd from './HomeSquareAd/HomeSquareAd'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'


const cates = [{img:'https://mysobol.com/wp-content/uploads/2022/09/Food-and-Beverage-Industry-Overview-Categories.jpg',category:'food and beverages'},
{img:'https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?w=740&t=st=1687871138~exp=1687871738~hmac=53277d31e1853600b5d725111040d826887ce5e049a9e96b2a71481782eb0327',category:'dessrts'},
{img:'https://img.freepik.com/free-photo/croissants-wooden-cutting-board_1150-28480.jpg?size=626&ext=jpg',category:'snacks'}  
]
const 
PreLoader = ({data}:any) => {
    const router= useRouter();
  return (
    <Box>
    <Container disableGutters className='wrap' sx={{px:1,maxWidth:'xl',display:'flex'}}>
    <Box sx={{mt:'2em',mr:'.1em',width:{sm:'25%',lg:'19%'},flexDirection:'column',display:{xs:'none',md:'flex'}}}>
    <Box className='bg white' sx={{
            px:1,
            py:2,width:'100%',background:'white'}}>
          
            <Typography  sx={{fontWeight:'500',px:1}}>
              All Categories
            </Typography>
         
          </Box>
        {cates.map(i=>{
          return <Box
          onClick={()=>router.push(`${i?.category.replace(/ /g, '-') || 'collection'}/products`)}
          key={i?.img} className='flex shadow cursor' sx={{
            px:1,
            py:2,width:'100%',background:'white'}}>
            <Box sx={{height:'20px',width:'20px'}}>
            <img src={i?.img} alt="" className="img" />
           </Box>
            <Typography sx={{fontWeight:'500',px:1}}>
             {i?.category}
            </Typography>
         
          </Box>
        })}
      </Box>
      <MainCarousel/>

     <Box>

        
         <Typography
                className='sectionTitle box'
                sx={{
                  pb:'.5em',
                  display:{xs:'flex',sm:'none'},
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '600'
            }}>
               Browse Collections
            </Typography>
         

            <Box className='wrap gap1 space-evenly' sx={{width:'95vw',my:3,display:{xs:'flex',sm:'none'}}}>

        {cates.map(i=>{
            return <Box

            onClick={()=>router.push(`${i?.category.replace(/ /g, '-') || 'collection'}/products`)}
            key={i?.img} className='cursor' sx={{borderRadius:'50%',height:'90px',my:2,width:{xs:'90px'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'50%',}} className="img" />
                    <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
             {i?.category}
            </Typography>
            </Box>

        })}
            </Box>

     </Box>

      <Box/>
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