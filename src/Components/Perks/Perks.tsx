"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'

const Perks = () => {
    const items = [
        {
          title: 'Pet Supplies Selection',
          icon: 'https://www.svgrepo.com/show/113124/dog-dish.svg',
          text: 'Explore our pet supplies and accessories.'
        },
        {
          title: 'Professional Pet Grooming',
          icon: 'https://www.svgrepo.com/show/516266/fetch-rewards.svg',
          text: 'Expert grooming services for your pets.'
        },
        {
          title: `Lebanon's Preferred Pet Shop`,
          icon: 'https://www.svgrepo.com/show/295893/pet-house-kennel.svg',
          text: 'Your trusted pet store with quality products.'
        },
        {
          title: 'Local & Imported Pet Food',
          icon: 'https://www.svgrepo.com/show/295889/pet-food-paw.svg',
          text: 'Explore a variety of pet food options.'
        },
      ];
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