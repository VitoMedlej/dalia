"use client"
import { Button } from '@mui/material'
import React from 'react'



let style1 = {
  color: 'white',
  background: '#ff9715',
  border: 'none',
  borderRadius: '8px', 
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
      background: '#ff8e00',
      transform: 'scale(1.05)',
  },
  display: 'flex',
  padding: '6px 34px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}
let style2 = {
  color: '#ff9715',
  background: 'transparent',
  border: 'none',
  borderRadius: '8px', 
  // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
      background: '#ff8e00',
      transform: 'scale(1.05)',
  },
  display: 'flex',
  padding: '6px 34px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}

const Btn = ({v2,disabled,onClick,className,children,sx}:{className?:string,disabled?:boolean,onClick?:()=>void,sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
   
    className={`trans ${className ? className : ''}`}
    disabled={disabled || false}
    onClick={onClick &&onClick}
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn