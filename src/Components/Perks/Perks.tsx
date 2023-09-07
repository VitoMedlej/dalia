"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'

const Perks = () => {
    const items =  [
      {
        title: "Lebanon's #1 pet shop",
        icon: "https://www.svgrepo.com/show/113124/dog-dish.svg",
        text: "Best quality and best prices"
      },
      {
        title: "Widest pet food range",
        icon: "https://www.svgrepo.com/show/516266/fetch-rewards.svg",
        text: "suitable for every budget while assuring best quality for your pet health"
      },
      {
        title: "Pet supplies",
        icon: "https://www.svgrepo.com/show/295893/pet-house-kennel.svg",
        text: "The perfect place to spoil your loved one"
      },
      {
        title: "Wide range of services",
        icon: "https://www.svgrepo.com/show/295889/pet-food-paw.svg",
        text: "Contact us for any service inquiries"
      }
    ]
  return (
    <Box sx={{py:4,mx:{xs:1,sm:1.5,md:2}}}>
       
        <Box  className='flex wrap gap auto row justify-between'>

        {
           items.map(i=>{
                return <Box key={i.title} className='center items-center auto flex row' sx={{
                    py:2,
                    width:{xs:'47%',sm:'30%',md:'22%'}}}>
                    <Box sx={{width:'100px'}}>
                        <img src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Box sx={{ml:.7}} className="flex col">

                    <Typography className='' sx={{fontSize:{xs:'.89em',sm:'1em'},fontWeight:600}}  component={'h1'}>{i.title}</Typography>
                    <Typography sx={{fontSize:'.71em'}} component={'p'}>{i.text}</Typography>
                    </Box>
                </Box>
            })
        }
        </Box>

    </Box>
  )
}

export default Perks