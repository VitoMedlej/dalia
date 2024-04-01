"use client"
import { Box, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { gsap } from "gsap";



const Perks = () => {
  const items = [
    { title: 'Delivery Anywhere In Lebanon', text: 'Fast and reliable shipping', icon: 'https://cdn-icons-png.flaticon.com/128/2769/2769339.png' },
    { title: 'Quality Assurance', text: 'Premium and fresh products', icon: 'https://cdn-icons-png.flaticon.com/128/1534/1534216.png' },
    { title: 'Fresh from the Source', text: 'Locally sourced ingredients', icon: 'https://cdn-icons-png.flaticon.com/128/4689/4689710.png' },
];
useEffect(() => {
  gsap.to(Array.from({length: 3}, (_, i) => `.item-${i}`), {
    opacity: 1,
    duration: .5,
    delay:.2,
    stagger: 0.2,
    scrollTrigger: {
      trigger:'.item-0',
      markers:false,
      start:'top 80% ' 
    }
  });
}, []);
  return (
    <Box  sx={{mt:20,pb:8,width:'100%'}}>
       {/* <Divider/> */}
        <Box sx={{py:4}} className='flex bg wrap gap auto row justify-between'>

        {
           items.map((i,idx:number)=>{
                return <Box key={i.title} className={`center item-${idx} op0 white text-center items-center auto flex col`} sx={{
                    py:2,
                    width:{xs:'47%',sm:'30%',md:'22%'}}}>
                    <Box sx={{width:'50px'}}>
                        <img style={{ filter: 'invert(1)'}} src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Box sx={{ml:.7}} className="flex col">

                    <Typography className='' sx={{fontStyle:'',fontSize:{xs:'1em',sm:'1.29em'},
                    fontWeight:600}}  component={'h1'}>{i.title}</Typography>
                     <Typography className='' sx={{fontSize:{xs:'.8em',sm:'1em'},
                    fontWeight:300}}  component={'h1'}>{i.text}</Typography>
                    </Box>
                </Box>
            })
        }
        </Box>

    </Box>
  )
}

export default Perks