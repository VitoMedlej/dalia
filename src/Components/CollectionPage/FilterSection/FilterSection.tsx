"use client"

import {Box, Button,  TextField, Typography} from '@mui/material'
import React, { FormEvent, useState } from 'react'
// import {AiOutlineSearch} from 'react-icons/ai';
import Btn from '@/Components/Btn/Btn';
import { server } from '@/Utils/Server';
import FilterAccordion from './FilterAccordion';
// import SearchInput from '@/Components/Navbar/SearchInput';

const FilterSection = ({handleReset,sx,setProducts}:any) => {
    const [options,setOptions] = useState({
        price : [1,100000],
        sort : 'latest',
        category : 'collection',
        // query : '',
        
    })
    
    const handleSubmit = async () => {
        const url =  `/api/sort?min=${options.price[0]}&max=${options.price[1]}&sort=${options.sort}&category=${options.category}`  ;
        const req = await fetch(`${server}${url}`,{cache:'no-store', next: { revalidate: 0 }})
        const res = await req.json()
        // if () {

            setProducts(res?.data?.products ? res?.data?.products : [])
        // }
    }
    return (
        <Box
            sx={{
           
            background: 'white',
      
            flexDirection: 'column',
            pt:2,
            px:1,
            display: 'flex',
            ...sx,
           
        }}>
           <Typography sx={{py:'.5em',fontWeight:'400',fontSize:'1em'}}>Filter Options</Typography>
         
          
     
                <FilterAccordion
                handleSubmit={handleSubmit}
                options={options}
                setOptions={setOptions}
                />
           
        </Box>
    )
}

export default FilterSection