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
           
            background: 'white',
      
            flexDirection: 'column',
            pt:2,
            px:1,
            display: 'flex',
            ...sx,
           
        }}>
           <Typography sx={{py:'.5em',fontWeight:'400',fontSize:'1em'}}>Filter Options</Typography>
         
          
     
                <FilterAccordion
                options={options}
                setOptions={setOptions}
                />
           
        </Box>
    )
}

export default FilterSection