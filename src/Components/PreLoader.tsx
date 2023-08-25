"use client"
import React from 'react'
import { Box,  Container, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'


const cates = [{img:'https://ucarecdn.com/4635c19f-1ac8-454f-aaf7-8c67adfe4fd0/WhatsAppImage20230824at191722.jpeg',category:'Cricut machines'},
{img:'https://4.bp.blogspot.com/-Jt0CZBa0r6s/WQoWgzdYryI/AAAAAAAAuE4/WNVqO4RNJEoJZeWAGCCDtT-YdkxV-JaPwCPcB/s640/wholesale%2Bcraft%2Bblanks.JPG',category:'Customizable Blanks'},
{img:'https://ucarecdn.com/e490c41b-ddd1-4ef1-a06c-b1b0692bd83a/WhatsAppImage20230824at191716.jpeg',category:'Hot offers'} ,
{img:'https://ucarecdn.com/bfb9f54b-ee34-4cdc-930c-3a97234595fe/WhatsAppImage20230824at191719.jpeg',category: 'New Arrivals'}  ,
{img:'https://ucarecdn.com/d01c6f74-4d3b-46c4-9d31-67966950b09e/WhatsAppImage20230824at191720.jpeg',category:'Materials'}  ,

]
const 
PreLoader = ({data,resImages}:any) => {
    const router= useRouter();
  return (
    <Box >
      <MainCarousel resImages={resImages}/>

    <Container disableGutters className='wrap auto flex' sx={{pt:10,px:{sm:1},maxWidth:'xl',display:'flex'}}>
  
    <Box className='flex auto wrap ' sx={{justifyContent:'space-between',width:'100%',maxWidth:'xl'}}>
      {
        ['https://ucarecdn.com/e79d337c-b709-4ea4-aec0-6f3403afff1e/WhatsAppImage20230824at191717.jpeg','https://ucarecdn.com/3a54db45-c216-4076-996c-3ec4524be8f0/WhatsAppImage20230824at191727.jpeg'].map(img=>{
          return <Box className='cursor' onClick={()=>router.push('/collection/products')} key={img} sx={{minWidth:'200px',my:1,width:{xs:'99%',sm:'49%',md:'48%'}}}>
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