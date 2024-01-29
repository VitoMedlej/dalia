"use client"
import { Box, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Btn from '../Btn/Btn'
import {GrFormClose} from 'react-icons/gr'

import {BsArrowUpShort} from 'react-icons/bs'
const ScrollUp = () => {
    
  const [open,setOpen] = useState(true)
  return (
    <Box className='flex col center flex align-center' sx={{position:'fixed',zIndex:4124,bottom:'6%',right:'2%'}}>
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
    <a style={{textDecoration:'none',borderRadius:'2000px',background:'white'}} href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' rel='noopener'>
    
    <Btn sx={{ border:'1px solid transparent',
    borderRadius:25,
    background:'white',
    boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`,
    padding:0,':hover':{background:'transparent'}}}>
      <Box className='center flex align-center' sx={{width:'30px',ml:1}}>
      <img src="https://www.7979.org.my/uploads/1/2/6/3/126376279/whatsapp-icon_1.png" alt="Whatsapp Icon" className="img" />
      </Box>
         <Box sx={{mr:1,background:'white',py:1,px:2,borderRadius:25,color:'black'}}>
         +961 70 657 915
      </Box>
   
    </Btn>
    </a>

    </Box>
  )
}

export default ScrollUp