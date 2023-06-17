import { Button } from '@mui/material'
import React from 'react'

let style1 = {
    color: 'white !important',
    background: '#1a4671',
    ':hover': {
        background: '#1a4671'
    },
    display: 'flex',
    borderRadius: '20px',
    py: 1.2,
    px: 2.2,
    fontSize: '12px'
}
let style2 = {
    color: '#1a4671',
    borderRadius: '20px',
    display: 'flex',
    fontWeight:'700',

    my:1,
    py: .9,
    px: 2,
    ':hover':{  borderColor: ' #1a4671'},
    fontSize: '10px',
    
    border:'1.1px solid #1a4671'
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