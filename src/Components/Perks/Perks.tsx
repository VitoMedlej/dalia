import { Box, Typography } from '@mui/material'
import React from 'react'

const Perks = () => {
    const items = [
        {
            title: 'Best tradional food',
            icon : 'https://cdn-icons-png.flaticon.com/512/2515/2515183.png'
        },
        {
            title: 'Happiness to your doorstep',
            icon : 'https://cdn-icons-png.flaticon.com/512/6581/6581537.png'
        },
        {
            title: 'Super healthy',
            icon : 'https://cdn-icons-png.flaticon.com/512/3022/3022781.png'
        },
        {
            title: 'Delivery all over 🇱🇧',
            icon : 'https://cdn-icons-png.flaticon.com/512/9198/9198208.png'
        },

    ]
  return (
    <Box className='w100' sx={{px:1,py:8}}>
        <Box>
        <Typography
                className='sectionTitle box'
                sx={{
                  pt:'.5em',
                  mx:1,
                  width:'100%',
                  display:{xs:'flex',sm:'flex'},
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '600'
            }}>
Advantages
            </Typography>
        </Box>
        <Box  className='flex wrap gap auto row justify-between'>

        {
           items.map(i=>{
                return <Box key={i.title} className='center items-center auto flex col' sx={{
                    py:2,
                    width:{xs:'49%',sm:'24%'}}}>
                    <Box sx={{width:'100px'}}>
                        <img src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Typography className='text-center' sx={{fontSize:'1.15em'}}  component={'h1'}>{i.title}</Typography>
                    {/* <Typography sx={{fontSize:'.9em'}} component={'p'}>Fooer Name</Typography> */}
                </Box>
            })
        }
        </Box>

    </Box>
  )
}

export default Perks