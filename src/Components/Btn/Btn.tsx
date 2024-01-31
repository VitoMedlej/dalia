"use client"
import { Button } from '@mui/material'
import React from 'react'



let style1 = {
  color: 'white',
  background: ' #006430',
  border:'1px solid  #006430',
  borderRadius: '10px', 
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
      background: '#006430',
      color:'white',
 
  },
  display: 'flex',
  padding: '11px 35px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}
let style2 = {
  color: 'white',
  background: 'transparent',
  border: '1px solid  #006430',
  borderRadius: '10px', 
  // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
    color:'black',
      background: '#006430',
      transform: 'scale(1.05)',
  },
  display: 'flex',
  padding: '6px 34px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}

const Btn = ({v2,disabled,onClick,className,children,sx}:{className?:string,disabled?:boolean,onClick?:()=>any,sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
   
    className={`trans ${className ? className : ''}`}
    disabled={disabled || false}
    onClick={onClick &&onClick}
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn