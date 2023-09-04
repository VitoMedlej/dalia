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
    <Box className='w100' sx={{px:1,py:4}}>
        <Box>
        {/* <Typography
                className='sectionTitle center auto text-center box'
                sx={{
                  pt:'.5em',
                  mx:1,
                  width:'100%',
                  display:{xs:'flex',sm:'flex'},
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '300'
            }}>
Advantages
            </Typography> */}
        </Box>
        <Box  className='flex wrap gap auto row justify-between'>

        {
           items.map(i=>{
                return <Box key={i.title} className='center items-center auto flex row' sx={{
                    py:2,
                    width:{xs:'49%',sm:'32%',md:'22%'}}}>
                    <Box sx={{width:'100px'}}>
                        <img src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Box sx={{ml:.5}} className="flex col">

                    <Typography className='' sx={{fontSize:'1em',fontWeight:600}}  component={'h1'}>{i.title}</Typography>
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