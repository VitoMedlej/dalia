"use client"
import { Box } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import {BsArrowUpShort} from 'react-icons/bs'
const ScrollUp = () => {
    
    function scrollToTop() {
        const position = Math.floor(window.scrollY);
        if (position > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, position - position / 10);
          
        }
      }
  return (
    <Box className='flex row center flex align-center' sx={{position:'fixed',zIndex:4124,bottom:'6%',right:'2%'}}>


    {/* <Btn onClick={()=>scrollToTop()} sx={{
      color:'white !important',
      width:'30px',margin:'0em auto',height:'30px',px:0,minWidth:0}}>
        <BsArrowUpShort style={{color:'white !important',fontSize:'2em'}}/>
    </Btn> */}
    <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' rel='noopener'>

    <Btn sx={{ border:'1px solid transparent',boxShadow:'none',
    borderRadius:25,
    padding:0,':hover':{background:'none'},background:'none'}}>
      <Box className='center flex align-center' sx={{width:'30px'}}>

      <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" className="img" />
      </Box>
    </Btn>
    </a>

    </Box>
  )
}

export default ScrollUp