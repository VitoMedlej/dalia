"use client"
import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function ProductCard({ setselectedSize, selectedSize, sizes }: any) {
  const [defaultSize, setDefaultSize] = useState<string>('');

  useEffect(() => {
    // Set defaultSize to the size of the first element in sizes array
    if (!defaultSize && sizes && sizes.length > 0) {
      setDefaultSize(String(sizes[0].size)); // Convert to string
      const defaultOption = sizes.find((option: any) => String(option.size) === String(sizes[0].size));
      setselectedSize(defaultOption);
    }
  }, [defaultSize, sizes, setselectedSize]);

  const handleChange = (event: any) => {
    const weight = event.target.value;
    const option = sizes.find((option: any) => String(option.size) === String(weight));
    setselectedSize(option);
  };

  return (
    <Box className='flex items-center' sx={{ minWidth: { xs: 120, lg: 200 } }}>
      <FormControl fullWidth>
        <InputLabel id="weight-label">Sizes</InputLabel>
        <Select
          size='small'
          labelId="weight-label"
          id="weight-select"
          value={selectedSize?.size || defaultSize}
          label="Weight"
          onChange={handleChange}
        >
          {sizes && sizes?.map((option: any) => (
            <MenuItem key={option.size} value={String(option.size)}>
              {String(option.size)}g
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Display other properties from selectedSize if needed */}
      {/* <p>Price: ${selectedSize.price}</p> */}
    </Box>
  );
}