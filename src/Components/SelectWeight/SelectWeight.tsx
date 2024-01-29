import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function ProductCard({ setselectedSize,selectedSize, sizes } : any) {

  const handleChange = (event:any) => {
if (!sizes) {
  // setselectedSize({price:price});
  console.log('weights: ', sizes);

  return
}
    
    const weight = event.target.value;
    const option = sizes.find((option:any) => option.size == weight);
    setselectedSize(option);
  };

  return (
    <Box className='flex items-center' sx={{ minWidth: {xs:120,lg:200} }}>
      <FormControl fullWidth>
        <InputLabel id="weight-label">Sizes</InputLabel>
        <Select
        size='small'
          labelId="weight-label"
          id="weight-select"
          value={selectedSize?.size}
          label="Weight"
          onChange={handleChange}
        >
          {sizes && sizes?.map((option : any) => (
            <MenuItem key={option.size} value={option.size}>
              {option.size}g
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <p>Price: ${selectedSize.price}</p> */}
    </Box>
  );
}
