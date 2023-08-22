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
import { categories } from '@/Components/Navbar/Navbar';
// import SearchInput from '@/Components/Navbar/SearchInput';

export default function SimpleAccordion({handleSubmit,options,setOptions}:any) {
   
    const handleChange = (val: string) => {
        // setValue(();
        // let val = (event.target as HTMLInputElement).value;
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
             comp: <SelectOneForm
             title= 'Category'
            List={
            
              [  'collection',
                ...categories]
             
           }
            value={options.category}
            setValue={
                handleChange
                }
            />
        },

        {
            comp: <SelectOneForm
            title= 'Sort By'
            List={[
                'latest',
                'highestPrice',
                'lowestPrice'
            ]

             }
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
        <Box sx={{justifyContent:'start',gap:2}} className='flex wrap'>
           
            {filters.map((filter,index) => {
                 
                
return  <Box
className='flex  center items-center'
                    key={index}
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