"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import {IoIosSearch} from 'react-icons/io'
import { useRouter } from 'next/navigation';
// import DirectionsIcon from '@mui/icons-material/Directions';
// 
export default function FilterBar({setNewValue,newValue,handleSubmit}:{newValue:string,setNewValue:any,handleSubmit?:any}) {
  const router = useRouter()
  

 
  return (
    <Paper
    onSubmit={(e)=> handleSubmit(false,e) }
      component="form"
      className='searchinput '
      sx={{
        py:'.25em',
        // my:'.25em',
        width:'100%',
        mb: '.25em' ,
        px:'.5em',
        // mb:'.5em',
        flex:1,
        flexBasis:'100%',
        boxShadow:'none',
        border:'1px solid #00000036',
        borderRadius:'4px',
        
        //  display: mobile ? {xs:'flex',md:'none'} : {xs:'none',md:'flex'},
         display:'flex',
         alignItems: 'center',
         
         maxWidth:{xs:'90%',
         
         lg:'100%'}


       
        }}
    >
   
      <InputBase
      value={`${newValue}`}
      onChange={(e)=>{ 
        
       setNewValue(`${e.target.value as string}`)}}
        sx={{
          display: 'flex',
          ml: 1,w:'100%', flex: 1 }}
        placeholder="Search Anything"
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton
       
      type="submit" className='searchIcon   trans' sx={{borderRadius:0,p: '5px' }} aria-label="search">
        <IoIosSearch />
      </IconButton>
     
    </Paper>
  );
}