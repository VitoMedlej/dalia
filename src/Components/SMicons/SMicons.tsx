"use client"
import { Box } from '@mui/material';
import React from 'react'
import {FaFacebook ,FaInstagram,FaWhatsapp} from 'react-icons/fa';
import {BsTiktok} from 'react-icons/bs';


const sm = [
    {
        Icon:'https://images.squarespace-cdn.com/content/v1/56e2e0c520c6472a2586add2/1615388332386-LFQRQFE53FIOLDRNADTY/2.png',
        href:'https://www.instagram.com/pets_town_lb/?igshid=MzRlODBiNWFlZA%3D%3D'
    },
    {Icon:'https://logospng.org/download/whatsapp/logo-whatsapp-4096.png',href:'https://wa.me/+96171984678'},
    // {
    //   Icon :BsTiktok ,href: `tiktok.com/@thecraftroomlb`,
    // },
    {

    Icon:'https://th.bing.com/th/id/R.51ae405e1b464603ee8ac65599eb5c95?rik=Hz2DT9FdIMH3cQ&pid=ImgRaw&r=0 ',   href:'https://www.facebook.com/profile.php?id=100087524961925&mibextid=9R9pXO'
}]
const SMicons = ({sx,color}:{color?:string,sx?:any}) => {
  return (
    <Box className='row flex' sx={{zIndex:1234567,maxWidth:'200px',mt:2,...sx}}>

    {sm.map((item)=>{
      return <a key={item.href} className='center flex auto rounded smIcon pointer align-center gap white' href={`${item.href}`} target='_blank' rel={'noneferrer'}>
            <Box sx={{width:'30px'}}>

            <img src={item.Icon} alt="" className="img cover" />
            </Box>
         </a>
    })}
    </Box>
  )
}

export default SMicons