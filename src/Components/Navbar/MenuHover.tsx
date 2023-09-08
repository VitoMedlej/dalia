"use client"
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineDown} from 'react-icons/ai'
import NestedMenuAccordion from '../Sidebar/NestedAccordion';
const HoverMenu = ({ category, subcategories ,img } : {img:string,category: string, subcategories: string[]}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = (e : any) => {
    if (
      !e.relatedTarget ||
      (e.relatedTarget.id !== 'menu' && e.relatedTarget.id !== 'related-img' && e.relatedTarget.id !== 'button')
    ) {
      setShowMenu(false);
    }
  };

  return (
    <Box sx={{
      margin:'0 1em ',
      zIndex:12345678,

      background:'transparent',
        }}>
    
      <Typography 
      className=' cursor center flex gap1 black decor-none uppercase'
        id="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        component='p' sx={{width:'max-content',
        alignItems: 'center',
        zIndex:12345678,
        
        fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>
     {category} 
    <AiOutlineDown/> 
   </Typography>

      {showMenu && (
        <Box
        className='flex '
          id="menu"
          sx={{
            zIndex:12345678,
      boxShadow: '1px 1px 3px #00000017',
            position:'absolute',
            width: '100%',
            minHeight: '350px',
            maxHeight:'600px',
            left:0,
            backgroundColor: 'white',

          }}
          onMouseLeave={handleMouseLeave}
        >
          {/* <ul style={{paddingTop:7,width:'30%'}}>
          <Link className=' decor-none uppercase' key={category} href={`/${category.replace(/ /g, '-').toLocaleLowerCase()}/products`}>

            <li>
            <Typography onClick={()=>setShowMenu(false)}  component='p' sx={{color:'black',width:'max-content',fontWeight:600,fontSize:{xs:'.86em',sm:'1.125em'}}}>
                {category}
     </Typography>
            </li>
          </Link>
            {subcategories.map((subcategory) => (
              <li className='' key={subcategory}>
              <Link className=' decor-none uppercase' key={subcategory} href={`/${category.replace(/ /g, '-').toLocaleLowerCase()}/products?type=${ subcategory.replace(/ /g, '-').toLocaleLowerCase()}`}>
                
     <Typography onClick={()=>setShowMenu(false)}  component='p' sx={{width:'max-content',fontWeight:300,py:.15,fontSize:{xs:'.7em',sm:'.85em'}}}>
                {subcategory}
     </Typography>
 </Link>
                </li>
            ))}
          </ul> */}
        <NestedMenuAccordion/>

          <Box  sx={{pointerEvents:'none',cursor:'none', width:'70%',height:'100%',minHeight:'350px'}}>
            <img src={`${img}`} alt="Category Image" className="img " />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HoverMenu;