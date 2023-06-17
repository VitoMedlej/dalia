import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import {IoIosSearch} from 'react-icons/io'
import { useRouter } from 'next/navigation';
// import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase({sx,mobile,onSubmit,value,setValue}:{mobile?:boolean,onSubmit:(e: React.FormEvent<HTMLFormElement> )=>void,value:string,setValue:any,sx?:any}) {
  const router = useRouter()
  return (
    <Paper
    onSubmit={(e)=>onSubmit(e)}
      component="form"
      className='searchinput '
      sx={{
        py:'.25em',
        mt:'.25em',
        px:'.5em',
        mb:'.5em',
        flex:1,
        flexBasis:'100%',
        boxShadow:'none',
        border:'1px solid #00000036',
        borderRadius:'20px',
        
         display: mobile ? {xs:'flex',md:'none'} : {xs:'none',md:'flex'}, alignItems: 'center',width:'100%',maxWidth: {xs:'100%',md:'600px',lg:'700px'} 
         ,...sx
        }}
    >
   
      <InputBase
      value={value}
      onChange={(e)=>setValue(`${e.target.value}`)}
        sx={{
          display: 'flex',
          ml: 1,w:'100%', flex: 1 }}
        placeholder="Search Anything"
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton
        onClick={()=>        router.push(`/category/products?limit=80&search=${value}`)
      }
      type="submit" className='searchIcon   trans' sx={{borderRadius:0,p: '5px' }} aria-label="search">
        <IoIosSearch />
      </IconButton>
     
    </Paper>
  );
}