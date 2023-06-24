import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall({value,setValue,sx}:any) {
  // const [value, setValue] = React.useState('');



  return (
    <FormControl   variant="outlined" sx={{ my:0.5,  width : '100%',...sx }} size="small">
      <InputLabel id="demo-select-small">Sort by</InputLabel>
      <Select
       
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label="Size"
        onChange={(e)=>setValue(e.target.value)}
      >
        <MenuItem value="products">
          <em>All</em>
        </MenuItem>
        <MenuItem value={'newest'}>Newest</MenuItem>
        <MenuItem value={'highest'}>High to low</MenuItem>
        <MenuItem value={'lowest'}>Low to high</MenuItem>
      </Select>
    </FormControl>
  );
}