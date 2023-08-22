"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'

const Perks = () => {
    const items = [
     
        {
            title: 'Best Arts & Crafts Supplies',
            icon : 'https://www.svgrepo.com/show/454415/draw-mypaint-software.svg'
        },
        {
            title: 'Sign Up For Our News Letter',
            icon : 'https://www.svgrepo.com/show/477054/email-download.svg'
        },
        {
            title: 'Delivery All Over Lebanon',
            icon : 'https://www.svgrepo.com/show/401385/delivery-truck.svg'
        },

    ]
  return (
    <Box className='w100' sx={{px:1,py:8}}>
        <Box>
        <Typography
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
            </Typography>
        </Box>
        <Box  className='flex wrap gap auto row justify-between'>

        {
           items.map(i=>{
                return <Box key={i.title} className='center items-center auto flex col' sx={{
                    py:2,
                    width:{xs:'49%',sm:'32%'}}}>
                    <Box sx={{width:'100px'}}>
                        <img src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Typography className='text-center' sx={{fontSize:'1.05em'}}  component={'h1'}>{i.title}</Typography>
                    {/* <Typography sx={{fontSize:'.9em'}} component={'p'}>Fooer Name</Typography> */}
                </Box>
            })
        }
        </Box>

    </Box>
  )
}

export default Perks