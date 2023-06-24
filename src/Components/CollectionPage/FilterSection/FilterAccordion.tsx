import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {MdOutlineExpandMore} from 'react-icons/md';

import RadioGroupForm from './Forms/RadioGroupForm';
import SelectOneForm from './Forms/SelectOneForm';
import { Box } from '@mui/material';

export default function SimpleAccordion({options,setOptions}:any) {
   
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
            comp: <RadioGroupForm
            value={options.category}
            setValue={
                handleChange
                }
            />
        },
         {
            title: 'Sort By',
            comp: <SelectOneForm
            value={options.sort}
            setValue={handleSort}
            sx={{
                    // my: '1em'
                }}/>
        }
    ]
    return (
        <Box className='flex justify-between'>
            {filters.map(filter => {

                return <>
                
                <Box
                    key={filter.title}
                    sx={{
                    boxShadow: 'none'
                }}>
                
                        <Typography>{filter.title}</Typography>
                    </Box>
                    <Box
                        sx={{
                        padding: 0
                    }}>
                        {filter.comp}
                    </Box>
                </> 

              
            })}
        </Box>
    );
}