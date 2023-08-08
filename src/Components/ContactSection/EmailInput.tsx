"use client"
import { Paper, InputBase, IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const EmailInput = () => {
    const router = useRouter()
    const [value,
      setValue] = React.useState('');
  return (
    <Paper
    // onSubmit={(e)=>handleSearch(e)}
      component="form"
      className='searchinput '
      sx={{
        py:'.25em',
        mx:2,
        mt:'.25em',
        px:'.5em',
        mb:'.5em',
        flex:1,
        flexBasis:'100%',
        boxShadow:'none',
        border:'1px solid #00000036',
        borderRadius:'20px',
        display:'flex',
        //  display: {xs:'none',md:'flex'},
          alignItems: 'center',width:'100%',maxWidth: {xs:'99%',md:'350px',lg:'450px'} 
        }}
    >
   
      <InputBase
      value={`${value}`}
      onChange={(e)=>{ 
        
        setValue && setValue(`${e.target.value as string}`)}}
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
  )
}

export default EmailInput