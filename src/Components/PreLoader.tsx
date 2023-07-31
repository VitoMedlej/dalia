"use client"
import React from 'react'
import { Box,  Container, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'


const cates = [{img:'https://img-lcwaikiki.mncdn.com/mnresize/1200/1600/pim/productimages/20221/5617444/l_20221-s27945z1-ffj_5.jpg',category:'boy'},
{img:'https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20231/6260226/v1/l_20231-s37717z4-h45-130-23_5.jpg',category:'girl'},
{img:'https://i5.walmartimages.com/asr/0f952351-de35-4ab4-a1c5-538a8c7dbda5.bc4ee3a5867d729d05938182f7694161.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',category:'baby girl'} ,
{img:'https://www.next.co.uk/nxtcms/resource/blob/5680092/95dfcabd3467afc357e7c1767559de7e/04-07-23-baby-by-gender-image-2-data.jpg',category:'baby boy'}  ,
{img:'https://ae01.alicdn.com/kf/HTB1_SYMPVzqK1RjSZFoq6zfcXXab/Mommy-and-Me-Clothes-2019-Tshirt-Family-Matching-Clothes-Mother-Daughter-T-Shirt-Mother-and-Daughter.jpg_640x640.jpg',category:'adult matching outfits'}  ,

]
const 
PreLoader = ({data}:any) => {
    const router= useRouter();
  return (
    <Box >
      <MainCarousel/>

    <Container disableGutters className='wrap auto flex' sx={{pt:10,px:{sm:1},maxWidth:'xl',display:'flex'}}>
  
    <Box className='flex auto row ' sx={{justifyContent:'space-between',width:'100%',maxWidth:'xl'}}>
      {
        ['https://decorhint.com/wp-content/uploads/2020/11/essential-craft-tools-and-craft-supplies-2.jpg','https://decorhint.com/wp-content/uploads/2020/11/essential-craft-tools-and-craft-supplies-2.jpg'].map(img=>{
          return <Box key={img} sx={{width:{xs:'99%',sm:'49%',md:'48%'}}}>
            <img src={img} alt="Category Image Shop Now" className="img" />
          </Box>
        })
      }
    </Box>

     <Box sx={{mx:1,width:'100%'}}>

        
         <Typography
                className='sectionTitle text-center box'
                sx={{
                  pb:'.5em',
                  pt:5,
                  display:'flex',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                flex:1,
                fontWeight: '300'
            }}>
               Browse Collections
            </Typography>
         

            <Box className='wrap  space-evenly' sx={{width:'100%',my:3,display:{xs:'flex'}}}>

        {cates.map(i=>{
            return <Box

            onClick={()=>router.push(`${i?.category.replace(/ /g, '-') || 'collection'}/products`)}
            key={i?.img} className='cursor'
             sx={{borderRadius:'50%',height:{xs:'48vw',sm:'32vw',md:'24vw',lg:'15vw'},
             my:2,width:{xs:'48vw',sm:'32vw',md:'24vw',lg:'15vw'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'50%'}} className="img" />
                    <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
             {i?.category}
            </Typography>
            </Box>

        })}
            </Box>

     </Box>

      <Box/>
        <HomeProductCollection products={ data?.products }/>

        <Perks/>
      
        
        <HomeProductsCarousel Collectiontitle={"Featured Products"} delay={3000} data={data?.featuredProducts}/>

        

    </Container>
        <ContactSection/>
  </Box>
  )
}

export default PreLoader