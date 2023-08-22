"use client"
import React from 'react'
import { Box,  Container, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'


const cates = [{img:'https://ucarecdn.com/dcd75a0a-1eca-4982-8716-201e5cb163f5/shot26amain0595i0121.jpg',category:'Cricut machines'},
{img:'https://ucarecdn.com/7923ebb3-31ea-4f4a-b095-c2a1d6bae4b0/20065821.jpg',category:'Customizable Blanks'},
{img:'https://www.crafterscompanion.com/page//content/uploads/2022/02/IMG_9100-1024x683.jpg',category:'Hot offers'} ,
{img:'https://i.etsystatic.com/45256079/c/942/942/8/0/il/60ed38/5140412525/il_600x600.5140412525_nxcd.jpg',category: 'New Arrivals'}  ,
{img:'https://i.etsystatic.com/37495329/r/il/d2aec0/4310920560/il_340x270.4310920560_i6j3.jpg',category:'Materials'}  ,

]
const 
PreLoader = ({data,resImages}:any) => {
    const router= useRouter();
  return (
    <Box >
      <MainCarousel resImages={resImages}/>

    <Container disableGutters className='wrap auto flex' sx={{pt:10,px:{sm:1},maxWidth:'xl',display:'flex'}}>
  
    <Box className='flex auto row ' sx={{justifyContent:'space-between',width:'100%',maxWidth:'xl'}}>
      {
        ['https://www.crafterscompanion.com/page//content/uploads/2022/02/IMG_8026-1024x683.jpg','https://www.crafterscompanion.com/page//content/uploads/2022/02/IMG_9956-1024x683.jpg'].map(img=>{
          return <Box className='cursor' onClick={()=>router.push('/collection/products')} key={img} sx={{width:{xs:'99%',sm:'49%',md:'48%'}}}>
            <img src={img} alt="Category Image Shop Now" className="img" />
          </Box>
        })
      }
    </Box>

     <Box
                className=' text-center auto center box'
     
     sx={{mx:1,width:'100%'}}>

        
         <Typography
                className='sectionTitle text-center auto center box'
                sx={{
                  pb:'.5em',
                  pt:9,
                  display:'flex',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                flex:1,
                fontWeight: '300'
            }}>
               Explore Categories
            </Typography>
         

            <Box className='wrap  space-evenly' sx={{width:'100%',my:3,display:{xs:'flex'}}}>

        {cates.map(i=>{
            return <Box

            onClick={()=>router.push(`${i?.category.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
            key={i?.img} className='cursor'
             sx={{borderRadius:'50%',height:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'},
             my:2,width:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'}}}>
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

      
        
        {/* <HomeProductsCarousel Collectiontitle={"Featured Products"} delay={3000} data={data?.featuredProducts}/> */}

        
        <Perks/>

    </Container>
        <ContactSection/>
  </Box>
  )
}

export default PreLoader