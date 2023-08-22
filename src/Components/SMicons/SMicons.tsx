import { Box } from '@mui/material';
import React from 'react'
import {FaFacebook ,FaInstagram,FaWhatsapp} from 'react-icons/fa';
import {BsTiktok} from 'react-icons/bs';


const sm = [
    {
        Icon:FaInstagram,
        href:'https://www.instagram.com/thecraftroom.lb/?next=https%3A%2F%2Fwww.instagram.com%2Fticketshopcol%2Fp%2FBwKRsoxI8Tf%2F%3Fhl%3Dcs%26__coig_login%3D1'
    },
    {Icon:FaWhatsapp,href:'https://wa.me/+96103874743'},
    {
      Icon :BsTiktok ,href: `tiktok.com/@thecraftroomlb`,
    },
    {

    Icon:FaFacebook,   href:'https://www.facebook.com/profile.php?id=100087524961925&mibextid=9R9pXO'
}]
const SMicons = ({sx,color}:{color?:string,sx?:any}) => {
  return (
    <Box className='row flex' sx={{zIndex:1234567,maxWidth:'200px',mt:2,...sx}}>

    {sm.map((item)=>{
      return <a key={item.href} className='center flex auto rounded smIcon pointer align-center gap white' href={`${item.href}`} target='_blank' rel={'noneferrer'}>

            <item.Icon color={color || 'white'} size='2em'/>
         </a>
    })}
    </Box>
  )
}

export default SMicons