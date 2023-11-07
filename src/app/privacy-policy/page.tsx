"use client"
import { Container, Typography, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const text = [
    `We understand that our customers are concerned with privacy, so we have initiated policies to ensure that your personal information is handled safely and responsibly. We collect customer information in an effort to improve your shopping experience and to communicate to you about our products, services, contests, or promotions.`,
    `From time to time, we will send informational e-mails to you concerning True Nature Blend information only. These could be specials, contest information or short messages containing information that we think you would want to know. We also share some basic shipping details with our delivery agent for the sole purpose of delivering your order to your door.`,
    `If at any time you wish to stop receiving these e-mails, we give you the option to remove your name from our mailing list with one easy step. We will NOT sell, rent, or share your e-mail address or personal details with a third party. We understand that this information is private and will handle it in a responsible manner.`,
]
const Index = () => {
  return (
    <Container sx={{mx:1,mt:24}} maxWidth='lg' >
        <Typography component='h1' sx={{mb:1,fontWeight:600,fontSize:'2em'}}>
           Privacy Policy
        </Typography>
        <Box>
            {
                text.map(i=>{
                    return <Typography sx={{maxWidth:'md',my:1}} key={i}>
                        {i}
                    </Typography>
                })
            }
        </Box>
        <Box>
            <Link href='/terms-and-conditions'>
                Terms and conditions
            </Link>
        </Box>
    </Container>
  )
}

export default Index