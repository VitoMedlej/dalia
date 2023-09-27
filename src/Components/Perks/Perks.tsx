"use client"
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Perks = () => {
    const items =  [
    
      {
        title: "Secure Payment",
        icon: "https://www.svgrepo.com/show/284882/secure-shield-shield.svg",
        text: "suitable for every budget while assuring best quality for your pet health"
      },
      {
        title: "Express Shipping",
        icon: "https://www.svgrepo.com/show/490684/deliver-food.svg",
        text: "The perfect place to spoil your loved one"
      },
      {
        title: " Free Return",
        icon: "https://www.svgrepo.com/show/494549/return-box-cycle.svg",
        text: "Contact us for any service inquiries"
      }
    ]
  return (
    <Box sx={{py:4,mx:{xs:1,sm:1.5,md:2}}}>
       <Divider/>
        <Box  className='flex wrap gap auto row justify-between'>

        {
           items.map(i=>{
                return <Box key={i.title} className='center items-center auto flex row' sx={{
                    py:2,
                    width:{xs:'47%',sm:'30%',md:'22%'}}}>
                    <Box sx={{width:'50px'}}>
                        <img src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Box sx={{ml:.7}} className="flex col">

                    <Typography className='' sx={{fontSize:{xs:'.89em',sm:'.9em'},fontWeight:500}}  component={'h1'}>{i.title}</Typography>
                    </Box>
                </Box>
            })
        }
        </Box>

    </Box>
  )
}

export default Perks