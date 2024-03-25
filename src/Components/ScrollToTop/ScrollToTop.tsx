"use client"
import { Box, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Btn from '../Btn/Btn'
import {GrFormClose} from 'react-icons/gr'

import {BsArrowUpShort} from 'react-icons/bs'
const ScrollUp = () => {
    
  // const [open,setOpen] = useState(true)
  useEffect(() => {
    
  if (window) {
    window && window.scrollTo(0, 0)
  }
  }, [])
  
  return (
    <Box className='flex col center flex align-center'
    
    sx={{position:'fixed',
    transform:'translateY(50%)',
    zIndex:4124,bottom:{xs:'15%',sm:'17%'},right:{xs:'5%',sm:'4%'}}}>
    {/* <Box>

<Paper  className=' row' sx={{mb:1,padding:1,maxWidth:'200px',display:open?'flex' : 'none'}} elevation={0} >
    <Box>
      <Typography fontSize='.7em' component='p'>
        Hey there! How can we help you? Tap here to start chatting with us!
      </Typography>
    </Box>
    <IconButton onClick={()=>setOpen(false)} className=' flex' sx={{height:'30px',alignItems:'end',justifyContent:'flex-end`'}}>
        <GrFormClose color='red'/>
    </IconButton>
</Paper>
    </Box> */}
    <a style={{textDecoration:'none',borderRadius:'2000px',background:'transparent'}} href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' rel='noopener'>
    
    <Btn sx={{ border:'1px solid transparent',
    borderRadius:25,
    minWidth:'52px',
    background:'transparent',
    padding:0,':hover':{background:'transparent'}}}>
      <Box className='center flex align-center' sx={{width:'52px',ml:0}}>
      <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="Whatsapp Icon" className="img" />
      </Box>
      
     
   
    </Btn>
    </a>
    {/* <a style={{textDecoration:'none',marginTop:3,borderRadius:'2000px',background:'transparent'}} 
    
    href={'https://www.instagram.com/mounetdalia/'} target='_blank' rel='noopener'>
    
    <Btn sx={{ border:'1px solid transparent',
    borderRadius:25,
    background:'transparent',
    minWidth:'30px',

    padding:0,':hover':{background:'transparent'}}}>
      <Box className='center flex align-center' sx={{width:'30px',ml:0}}>
      <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Whatsapp Icon" className="img" />
      </Box>
      
       
   
    </Btn>
    </a> */}

    </Box>
  )
}

export default ScrollUp