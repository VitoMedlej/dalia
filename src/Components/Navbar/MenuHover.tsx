import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const HoverMenu = ({ category, subcategories } : {category: string, subcategories: string[]}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = (e : any) => {
    if (
      !e.relatedTarget ||
      (e.relatedTarget.id !== 'menu' && e.relatedTarget.id !== 'button')
    ) {
      setShowMenu(false);
    }
  };

  return (
    <Box sx={{
        }}>
    
      <Typography 
      className='clr cursor decor-none uppercase'
        id="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      component='p' sx={{width:'max-content',color:'black',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
      {category}
   </Typography>


      {showMenu && (
        <Box
        className='flex'
          id="menu"
          sx={{
            position:'absolute',
            width: '100%',
            height: '350px',
            left:0,
            backgroundColor: 'white',

          }}
          onMouseLeave={handleMouseLeave}
        >
          <ul style={{paddingTop:7,width:'50%'}}>
            <li>
            <Typography className='clr decor-none uppercase'  component='p' sx={{width:'max-content',pb:2,fontWeight:600,fontSize:{xs:'.7em',sm:'.85em'}}}>
                Types
     </Typography>
            </li>
            {subcategories.map((subcategory) => (
              <li className='black' key={subcategory}>
              <Link className='clr decor-none uppercase' key={subcategory} href={`/${category + '/' + subcategory.replace(/ /g, '-')}/products`}>
                
     <Typography  component='p' sx={{width:'max-content',fontWeight:300,py:.15,fontSize:{xs:'.7em',sm:'.85em'}}}>
                {subcategory}
     </Typography>
 </Link>
                </li>
            ))}
          </ul>
          <Box sx={{pt:7,height:'250px'}}>
            <img src="https://img-lcwaikiki.mncdn.com/mnresize/1200/1600/pim/productimages/20221/5617444/l_20221-s27945z1-ffj_5.jpg" alt="Category Image" className="img" />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HoverMenu;