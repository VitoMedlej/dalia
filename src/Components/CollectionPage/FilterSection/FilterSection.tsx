import {Box, Button,  TextField, Typography} from '@mui/material'
import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import Btn from '@/Components/Btn/Btn';
import { server } from '@/Utils/Server';
import FilterAccordion from './FilterAccordion';

const FilterSection = ({handleReset,sx,setProducts}:any) => {
    const [options,setOptions] = useState({
        price : [1,100000],
        sort : 'products',
        // category : 'products',
        // query : '',
        
    })
    const handleSubmit = async () => {
        const url =  `/api/sort?min=${options.price[0]}&max=${options.price[1]}&order=${options.sort}`  ;
        const req = await fetch(`${server}${url}`)
        const res = await req.json()
        if (res) [

            setProducts(res)
        ]
    }
    return (
        <Box
            sx={{
            width: {
                xs: '100%',
            },
            background: 'white',
      
            flexDirection: 'row',
         
            display: 'flex',
            ...sx,
           
        }}>
           <Typography sx={{py:'.5em',fontWeight:'600',fontSize:'1.2em'}}>Filter By</Typography>
         
          
     
                <FilterAccordion
                options={options}
                setOptions={setOptions}
                />
           
        </Box>
    )
}

export default FilterSection