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


    <Btn onClick={()=>scrollToTop()} sx={{width:'30px',margin:'1em auto',height:'30px',px:0,minWidth:0}}>
        <BsArrowUpShort style={{fontSize:'2em'}}/>
    </Btn>
    <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' rel='noopener'>

    <Btn sx={{padding:0,':hover':{background:'transparent'},background:'none'}}>
      <Box sx={{width:'30px'}}>

      <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" className="img" />
      </Box>
    </Btn>
    </a>

    </Box>
  )
}

export default ScrollUp