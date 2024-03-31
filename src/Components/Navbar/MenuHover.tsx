"use client"
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineDown} from 'react-icons/ai'
import NestedMenuAccordion from '../Sidebar/NestedAccordion';


const HoverMenu = ({ category, subcategories ,img } : {img:string,category: string, subcategories: {id:number,name:string}[]}) => {
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
  if (subcategories?.length < 1) return;
  return (
    <Box className='' sx={{
      margin:'0 1em ',
      zIndex:12345678,
      maxHeight:'400px',

      position:'relative',
      background:'transparent',
        }}>
    
    <Typography 
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      
        className=' cursor center flex gap1  decor-none captialize'
        id="button"
        component='h1' sx={{width:'max-content',
        color:'white',
        // mx:'1em',
        alignItems: 'center',
        
        fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
     {category} 
    <AiOutlineDown/> 
   </Typography>

      {showMenu && (
        <Box
        className='flex '
          id="menu"
          sx={{
            border:'1px solid black',
            zIndex:12345678,
      boxShadow: '1px 1px 3px #00000017',
            position:'absolute',
            // width: '100%',
            width: 'max-content',
            py:0,
            px:0,
            // minHeight: '150px',
            maxHeight:'600px',
            left:0,
            backgroundColor: 'white',

          }}
          onMouseLeave={handleMouseLeave}
        >
          <ul style={{width:'100%',padding:0}}>
          {/* <Link className=' decor-none uppercase' key={category} href={`/${category.replace(/ /g, '-').toLocaleLowerCase()}/products`}>

            <li>
            <Typography onClick={()=>setShowMenu(false)}  component='p' 
            sx={{color:'black',width:'max-content',fontWeight:900,fontSize:{xs:'.86em',sm:'1.125em'}}}>
                {category}
     </Typography>
            </li>
          </Link> */}
            {subcategories && subcategories.map((subcategory) => (
              <li style={{padding:' .25em 1em '}} className='' key={subcategory?.id}>
              <Link  className='black decor-none uppercase'
                href={`/${category?.replace(/ /g, '-').toLocaleLowerCase()}/products?type=${ encodeURIComponent(`${subcategory?.name}`)?.toLocaleLowerCase()}`}>
                
     <Typography onClick={()=>setShowMenu(false)} 
      component='p' sx={{width:'max-content',fontWeight:600,py:.15,fontSize:{xs:'.87em',sm:'.95em'}}}>
                {subcategory?.name}
     </Typography>
 </Link>
                </li>
            ))}
          </ul>
        {/* <NestedMenuAccordion/> */}

          {/* <Box 
          
          sx={{pointerEvents:'none',cursor:'none',
           width:'70%',height:'400px'}}>
            <img src={`${img}`} alt="Category Image" className="img " />
          </Box>  */}
        </Box>
      )}
    </Box>
  );
};

export default HoverMenu;