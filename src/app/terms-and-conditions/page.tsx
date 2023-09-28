"use client"
import Btn from '@/Components/Btn/Btn'
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const text = [
`Welcome to / True Nature Blend 
If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website, or contact us for clarification.`,
`The use of this website is subject to the following terms of use:`,
`Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.`,
`Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.`,
`This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.`,
`All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.`,
`Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.`,
`From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).`,
`Your use of this website and any dispute arising out of such use of the website is subject to the laws of Republic of Lebanon.`,
`When you place an order on our website, you may receive notifications regarding your order, its shipping, and promotional notifications from us. `,
`Pricing`,
`Items on sale or advertised at a discounted or reduced price are generally floor stock, and currently on hand at the time of the sale only. While we may be able to order more stock of a particular item for you, it will not generally be sold at the discounted rate but rather our normal, everyday retail price. Prices and other offers are subject to availability. Sale prices are also subject to and only available for a defined period of time and/or until on-hand stock is no longer available. Sale prices may not be available or applicable if you are wanting the item for collection at a later date.`,
`Any backordered items that are ordered/purchased during a sale will be amended to full price, or the order cancelled at your discretion. Quantities may be also be limited to a specified number per person or per transaction. These terms are generally applied to all sales and promotions unless otherwise specified.`,


]
const Index = () => {
  return (
    <Container sx={{mx:1,mt:24}} maxWidth='lg' >
        <Typography component='h1' sx={{mb:1,fontWeight:600,fontSize:'2em'}}>
            Terms And Conditions
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
            <Link href='/info/privacy-policy'>
                Privacy Policy
            </Link>
        </Box>
    </Container>
  )
}

export default Index