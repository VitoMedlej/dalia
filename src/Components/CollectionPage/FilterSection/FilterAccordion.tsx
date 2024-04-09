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
import { useCategoriesContext } from '@/context/Contexts';
// import SearchInput from '@/Components/Navbar/SearchInput';
export default function SimpleAccordion({handleSubmit,options,setOptions}:any) {
    const {categories} = useCategoriesContext();
    let categoryArray = categories && categories?.map((category:any) => category?.categoryName);
   
    const handleChange = (val: string) => {
        // setValue(();
        // let val = (event.target as HTMLInputElement).value;
        setOptions({...options,category:val})
      };
      const handleTypeChange = (val: string) => {
        // setValue(();
        // let val = (event.target as HTMLInputElement).value;
        setOptions({...options,type:val})
      };
    // const handlePrice = (value:number[]) => {
    //     // let price = ;
    //     setOptions({...options,price:value})
    // }
    // const handleSort = (val:string) => {
    //     setOptions({...options,sort:val})
    // }
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
             sx={{maxWidth:'250px'}}
             title= 'Category'
            List={
            
                categoryArray
             
           }
            value={options.category}
            setValue={
                handleChange
                }
            />
        },
//         {
//             comp: <SelectOneForm
//             sx={{maxWidth:'250px'}}
//             title= 'Type'
//            List={
//              options?.category?.toLocaleLowerCase() === 'all' ?
//               [
//                'All',
//        `Lions Mane`,
//      `MACA`,

//      `Bacopa Monnieri`,
//      `Passion Flower`,
//      `GABA`,
//      `Taurine`,
//      `L arginine`,
//      `L Lysine`,

   
// 'Cordyceps','Tongkat-ali','Ashwagandha'
//      ]
//      :
//      options?.category?.toLocaleLowerCase() === 'mushrooms' ?
//      [
//         'All',
// `Lions Mane`,


// 'Cordyceps'
// ]
// :
//  options?.category?.toLocaleLowerCase() === 'organic herbs' ?
// [
//     'All',
//     `Milk thistle`, `Sea moss`  ,`Yohimbe bark` ,'Water pill' , `Multi vitamins`,

// `MACA`,
// `Bacopa Monnieri`,
// `Passion Flower`,
// 'Tongkat-ali','Ashwagandha'
// ]
// :
//  options?.category?.toLocaleLowerCase() === 'natural supplements' ? 
// [
//     'All',
//      `GABA`,
//      `Taurine`,
//      `L arginine`,
//      `L Lysine`,

   
// ]:

// []
//           }
//            value={options?.type}
//            setValue={
//             handleTypeChange
//                }
//            />
//        },

        // {
        //     comp: <SelectOneForm
        //     title= 'Sort By'
        //     List={[
        //         'latest',
        //         'highestPrice',
        //         'lowestPrice'
        //     ]

        //      }
        //     value={options.sort}
        //     setValue={handleSort}
        //    />
        // },
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
className='flex   items-center'
                    key={index}
                    sx={{
                    width:'100%',
                    mt:{xs:0,md:1},
                    boxShadow: 'none'
                }}>
                
                 
                        {filter.comp}
               
                    </Box>
                 
              
            })}
               <Btn sx={{px:0,color:'green',py:0,':hover':{background:'none'},background:'none',border:'none'}} onClick={()=>handleSubmit()}>
                        Search
                    </Btn>
                    <Btn sx={{px:0,py:0,border:'none',color:'red',':hover':{background:'none'},background:'none'}}  onClick={()=>handleSubmit(true)}>
                        Reset
                    </Btn>
        </Box>
    );

}