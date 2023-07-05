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
    bordeRadius:1,

    py: 1.2,
    px: 2.2,
    fontSize: '12px'
}
let style2 = {
    color: '#1a4671',
  
    display: 'flex',
    fontWeight:'700',
    bordeRadius:1,
    my:1,
    py: .9,
    px: 2,
    ':hover':{  borderColor: ' black'},
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