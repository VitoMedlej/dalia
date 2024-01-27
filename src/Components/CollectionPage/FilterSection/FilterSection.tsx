"use client"

import {Box, Button,  TextField, Typography} from '@mui/material'
import React, { FormEvent, useState } from 'react'
// import {AiOutlineSearch} from 'react-icons/ai';
// import Btn from '@/Components/Btn/Btn';
// import { server } from '@/Utils/Server';
import FilterAccordion from './FilterAccordion';
// import { Router } from 'next/router';
// import { useRouter } from 'next/navigation';
// import SearchInput from '@/Components/Navbar/SearchInput';

const FilterSection = ({sx,setProducts,setOptions,options,handleSubmit}:any) => {
   
    
  
    return (
        <Box
            sx={{
           
            background: 'white',
      
            flexDirection: 'column',
            // pt:2,
            px:1,
            display: 'flex',
            ...sx,
           
        }}>
           {/* <Typography sx={{py:'.5em',fontWeight:'400',fontSize:'1em'}}>Filter Options</Typography> */}
         
          
     
                <FilterAccordion
                handleSubmit={handleSubmit}
                options={options}
                setOptions={setOptions}
                />
           
        </Box>
    )
}

export default FilterSection