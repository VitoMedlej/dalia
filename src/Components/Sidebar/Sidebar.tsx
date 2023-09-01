"use client";
import {useContext} from 'react';
import {Drawer,List,Divider,ListItem,ListItemButton,ListItemText,ListItemIcon,Box, Typography, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import {IoShirtOutline,IoShirtSharp} from 'react-icons/io5';
import { IconButton } from '@mui/material';

import { useRouter } from 'next/navigation';
import {AiOutlineArrowUp} from 'react-icons/ai';

import { DrawerContext } from '@/context/Contexts';
import {GrFormClose} from 'react-icons/gr'
import SMicons from '../SMicons/SMicons';
import { categories } from '../Navbar/Navbar';


export default function TemporaryDrawer({cates}:{cates:string[] | undefined}) {
 
  const {open, setOpen} = useContext(DrawerContext);
  const router = useRouter();
  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  const Lista = () => (
    <Box
      sx={{ width:  '300px',py:1 }}
      role="presentation"
      // onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <Box className='flex justify-between items-center '
      sx={{margin:'0 .5em',borderBottom:'1px solid #00000040',    justifyContent: 'flex-end'}}
      
      >
        <Box>
          <Typography sx={{fontWeight:600}}>
            Menu
          </Typography>
        </Box>

              <IconButton 
        
        onClick={toggleDrawer(false)}>
                        <GrFormClose
                                color='red'
                                />
                        </IconButton>
                     

                                </Box>
      <List>
      <ListItem
          sx={{fontWeight:600}}

          onClick={()=>{router.push(`/collection/products`); toggleDrawer(false)}}
           disablePadding>
            <ListItemButton>
            
                  <Typography sx={{fontWeight:600}}>
              All Products
            </Typography>
            </ListItemButton>
  

          </ListItem>


                  <Accordion sx={{border:'none',boxShadow:'none',}}>
            
                  <AccordionSummary
          expandIcon={<AiOutlineArrowUp />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       <Typography sx={{fontWeight:600}}>
             Materials
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List
  

        
           disablePadding>


{[`Adhesive Vinyls`,
`Heat Transfer Vinyls`,
`Papers and Cards`,
`Other Materials`].map(i=>{   return  <ListItem sx={{padding:0,width:'100%'}}

  onClick={()=>
    {setOpen(false);
    router.push(`/materials/products?type=${i.replace(/ /g, '-').toLocaleLowerCase()}`)}}

key={i}>

  
  <ListItemButton >
                  <Typography sx={{fontWeight:300}}>
              -{i}
            </Typography>
            </ListItemButton>
</ListItem>
            
            })}
          </List>


        </AccordionDetails>
      </Accordion>



      <Accordion sx={{border:'none',boxShadow:'none',}}>
            
            <AccordionSummary
    expandIcon={<AiOutlineArrowUp />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
 <Typography sx={{fontWeight:600}}>
 Tools and Accessories
      </Typography>
  </AccordionSummary>
  <AccordionDetails>
  <List


  
     disablePadding>


{[`Crafting Tools`,
`Machine Blades`,
`Cutting mats`].map(i=>{   return  <ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/tools-and-accessories/products?type=${i.replace(/ /g, '-').toLocaleLowerCase()}`)}}

key={i}>


<ListItemButton >
            <Typography sx={{fontWeight:300}}>
        -{i}
      </Typography>
      </ListItemButton>
</ListItem>
      
      })}
    </List>


  </AccordionDetails>
</Accordion>




<Accordion sx={{border:'none',boxShadow:'none',}}>
            
            <AccordionSummary
    expandIcon={<AiOutlineArrowUp />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
 <Typography sx={{fontWeight:600}}>
 Art supplies
      </Typography>
  </AccordionSummary>
  <AccordionDetails>
  <List


  
     disablePadding>


{[`Paints`,
`Pen & Markers`,
`Other Art Supplies`].map(i=>{   return  <ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/art-supplies/products?type=${i.replace(/ /g, '-').toLocaleLowerCase()}`)}}

key={i}>


<ListItemButton >
            <Typography sx={{fontWeight:300}}>
        -{i}
      </Typography>
      </ListItemButton>
</ListItem>
      
      })}
    </List>


  </AccordionDetails>
</Accordion>
       {[
    'New Arrivals',
    `Hot offers`,
`Cricut machines`, 
`Heat presses`,

`Pens and markers`,
`Customizable Blanks`,

].map((text, index) => {
          if (!text) return;
          return <ListItem
        
          onClick={()=>{setOpen(false);
            router.push(`/${text.replace(/ /g, '-').toLocaleLowerCase()}/products`)}}
          key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <IoShirtOutline /> : <IoShirtSharp />}
              </ListItemIcon> */}
            <Typography sx={{fontWeight:600}}>
              {text}
            </Typography>
            </ListItemButton>
          </ListItem>
        })
        
        }
      </List>
      <SMicons/>

      <Divider />
      
    </Box>
  );

  return (
    <div>

          <Drawer
            anchor={'right'}
            open={open}
            onClose={toggleDrawer(false)}
          >

  <Lista/>

      
      

          </Drawer>
    </div>
  );
}