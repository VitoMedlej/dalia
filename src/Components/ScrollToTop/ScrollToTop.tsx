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
    <Box sx={{position:'fixed',zIndex:4124,bottom:'6%',right:'2%'}}>


    <Btn onClick={()=>scrollToTop()} sx={{width:'40px',height:'40px',px:0,minWidth:0}}>
        <BsArrowUpShort style={{fontSize:'2em'}}/>
    </Btn>
    </Box>
  )
}

export default ScrollUp