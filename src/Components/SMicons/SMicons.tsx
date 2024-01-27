"use client"
import { Box } from '@mui/material';
import React from 'react'
// import {FaInstagram,FaWhatsapp} from 'react-icons/fa';
// import {BsTiktok} from 'react-icons/bs';


const sm = [
    {
        Icon:'https://www.svgrepo.com/show/520798/instagram.svg',
        href:'https://www.instagram.com/beeorganiclb?igsh=MXFreTZkbGI5ejlteA%3D%3D&utm_source=qr'
    },
    {Icon:'https://www.svgrepo.com/show/506628/whatsapp.svg',href:'https://wa.me/+96170657915'},
  
 ]
const SMicons = ({sx,color}:{color?:string,sx?:any}) => {
  return (
    <Box className='row flex' sx={{zIndex:1234567,...sx}}>

    {sm.map((item)=>{
      return <Box  key={item.href} className='relative bg flex center items-center justify-center space-between' sx={{borderRadius:'50%',width:'50px',mx:.25,mt:1,height:'50px'}}>
      <a   style={{width:'80%',height:'80%'}} className='img absolute' href={`${item.href}`} target='_blank' rel={'noneferrer'}>
          
            <img src={item.Icon} alt="" className="img contain " />
         </a>
            </Box>
    })}
    </Box>
  )
}

export default SMicons