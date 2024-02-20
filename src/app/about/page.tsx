"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    `Your health is our top priority. We meticulously curate our product range to ensure that you have access to the highest-quality natural supplements available. From ancient remedies like ashwagandha and tongkat ali to the modern marvels of cordyceps and lion's mane mushrooms, we've assembled a premium collection that's designed to support your journey toward optimal health.`,
    `At Mounet Dalia, excellence is not just a goal; it's our way of life. We are committed to providing you with products that are not only effective but also safe. Our team of experts works tirelessly to source the purest and most potent ingredients from nature's bounty.`,
    `We believe that when you choose Mounet Dalia, you're choosing a partner on your path to a healthier and more vibrant life.`,
    `Our commitment extends beyond your well-being. We're equally dedicated to the well-being of our planet. That's why we use eco-friendly packaging and support sustainable farming practices. We believe that by preserving the environment, we can help ensure a healthier future for generations to come.`,
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:4}}>
           <Typography sx={{mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            ABOUT US
        </Typography>
        <Box sx={{width:'100%',height:'400px'}}>
            <img src="https://ucarecdn.com/9304db51-1509-447d-b8e4-c87d0b8c11c2/408031158_664465732546685_227633461073843326_n.jpg" alt="" className="img contain" />
        </Box>
    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/>
    </Container>
  )
}

export default Index