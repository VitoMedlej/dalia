"use client"

import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import {MdOutlineExpandMore} from 'react-icons/md';

// import RadioGroupForm from './Forms/RadioGroupForm';
import SelectOneForm from './Forms/SelectOneForm';
import { Box, MenuItem } from '@mui/material';
import Btn from '@/Components/Btn/Btn';
// import SearchInput from '@/Components/Navbar/SearchInput';

export default function SimpleAccordion({handleSubmit,options,setOptions}:any) {
   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setValue(();
        let val = (event.target as HTMLInputElement).value;
        setOptions({...options,category:val})
      };
    const handlePrice = (value:number[]) => {
        // let price = ;
        setOptions({...options,price:value})
    }
    const handleSort = (val:string) => {
        setOptions({...options,sort:val})
    }
    const filters = [
        // {
        //     title: 'Price',
        //     comp: <SliderForm
        //     value={options.price}
        //     onChange={handlePrice}
        //     sx={{
        //             my: '1em'
        //         }}/>
        // },
         {
            title: 'Category',
            comp: <SelectOneForm
            Options={<Box>
              <MenuItem value="collection">
          <em>All</em>
        </MenuItem>
        <MenuItem value={'collection'}>All</MenuItem>
        <MenuItem value={'boy'}>Boy</MenuItem>
        <MenuItem value={'girl'}>Girl</MenuItem>
        <MenuItem value={'baby girl'}>Baby Girl</MenuItem>
        <MenuItem value={'baby boy'}>Baby Boy</MenuItem>
        <MenuItem value={'adult matching outfits'}>Matching Outfits</MenuItem>
            </Box>}
            value={options.category}
            setValue={
                handleChange
                }
            />
        },

        {
            title: 'Sort By',
            comp: <SelectOneForm
            Options={<Box>
                <MenuItem value="latest">
            <em>All</em>
          </MenuItem>
          <MenuItem value={'latest'}>Newest</MenuItem>
          <MenuItem value={'highestPrice'}>High to low</MenuItem>
          <MenuItem value={'lowestPrice'}>Low to high</MenuItem>
              </Box>}
            value={options.sort}
            setValue={handleSort}
           />
        },
        // {
        //     title: 'Sort By',

        //     comp: <SelectOneForm
            
        //     placeholder='Sort Options'
        //     value={options.sort}
        //     setValue={handleSort}
        //     sx={{
        //             // my: '1em'
        //         }}/>
        // }
    ]
    return (
        <Box sx={{justifyContent:'start',gap:2}} className='flex '>
           
            {filters.map(filter => {
                 
                
return  <Box
className='flex center items-center'
                    key={filter.title}
                    sx={{
                  
                    boxShadow: 'none'
                }}>
                
                 
                        {filter.comp}
               
                    </Box>
                 
              
            })}
               <Btn onClick={()=>handleSubmit()}>
                        Submit
                    </Btn>
        </Box>
    );

}