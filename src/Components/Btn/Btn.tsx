import { Button } from '@mui/material'
import React from 'react'

let style1 = {
    color: 'white !important',
    background: 'black',
    border:'1px solid black',
    
    ':hover': {
        background: 'white',
        color:'black !important',
    border:'1px solid black'

    },
    display: 'flex',
    bordeRadius:25,

    py: 1.22,
    px: 2.52,
    fontSize: '12px'
}
let style2 = {
    color: 'black',
  
    display: 'flex',
    fontWeight:'700',
    bordeRadius:25,
    my:1,
    py: .99,
    px: 2.2,
    ':hover':{  borderColor: 'black'},
    fontSize: '10px',
    
    border:'1.1px solid black'
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