"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    `Welcome to Mounet Dalia, a socially-driven enterprise committed to uplifting rural women by showcasing and selling their homemade Mouneh products. Established in 2022, our mission is to empower these women by supporting their traditional skills, thereby preserving our cultural heritage and creating brighter futures for all in Lebanon and the MENA Region.`,
    `At Mounet Dalia, we are guided by our core values of social responsibility and community support. We take pride in delivering the finest quality Mouneh products while empowering skilled rural women. What sets us apart is our unwavering commitment to social impact and innovation, offering convenience with just a click to your door, where tradition meets modernity.`,
    `Our team brings expertise in producing the most delicious and exquisitely designed Mouneh, inspired by the timeless flavors of TETA'S recipes. What motivates us is our passion for traditional Lebanese cuisine and our deep desire to benefit our community, bridging the gap between those who create Mouneh and those who cherish its flavors.`,
    `Mounet Dalia has achieved significant milestones, including being funded by Nawaya (Unicef), recognizing our message of social responsibility and support. We are dedicated to reaching every home in Lebanon and sending our products to beloved families abroad.`,
    `Our vision at Mounet Dalia is To be the leading platform celebrating the rich cultural heritage of rural Lebanon and the MENA region, empowering women artisans, and connecting communities through the timeless flavors of Mouneh.`,
    ` Vision Statement: "To be the leading platform celebrating the rich cultural heritage of rural Lebanon and the MENA region, empowering women artisans, and connecting communities through the timeless flavors of Mouneh."`,
    `Mission Statement: "At Mounet Dalia, our mission is to empower rural women by showcasing their traditional skills in crafting Mouneh products. We strive to preserve cultural heritage while creating economic opportunities for women in Lebanon and the MENA region. Through our commitment to social responsibility, quality, and innovation, we aim to reach every household locally and internationally, sharing the authentic taste of Lebanese cuisine and fostering sustainable community development.`,
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:4}}>
           <Typography sx={{mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            ABOUT US
        </Typography>
        <Box sx={{width:'100%',height:'400px'}}>
            <img src="https://ucarecdn.com/0abc6c11-ea28-433b-a205-e289be0e95f8/WhatsAppImage20240203at1050571.jpeg" alt="" className="img contain" />
        </Box>
    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        <Divider></Divider>
        {/* <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/> */}
    </Container>
  )
}

export default Index