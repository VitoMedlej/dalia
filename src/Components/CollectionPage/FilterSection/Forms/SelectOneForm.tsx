"use client"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall({value,setValue,List,sx}:{value:string,setValue:any,sx?:any,List:any}) {

  // const [value, setValue] = React.useState('');



  return (
    <FormControl   variant="outlined" sx={{ width:'200px', my:0.25  ,...sx }} size="small">
      <InputLabel id="demo-select-small">Sort Options</InputLabel>
      <Select
       
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label="Size"
        onChange={(e)=>setValue(e.target.value)}
      >
       {/* <List/> */}
       {List}
      </Select>
    </FormControl>
  );
}