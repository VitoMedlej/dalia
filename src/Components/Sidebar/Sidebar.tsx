"use client";
import {useContext, useEffect, useState} from 'react';
import {Drawer,List,Divider,ListItem,ListItemButton,ListItemText,ListItemIcon,Box, Typography, Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import {IoShirtOutline,IoShirtSharp} from 'react-icons/io5';
import { IconButton } from '@mui/material';
import {AiOutlineHeart} from 'react-icons/ai'

import { useRouter } from 'next/navigation';
import {AiOutlineArrowUp} from 'react-icons/ai';

import { DrawerContext } from '@/context/Contexts';
import {GrFormClose} from 'react-icons/gr'
import SMicons from '../SMicons/SMicons';
// import { categories } from '../Navbar/Navbar';
import Btn from '../Btn/Btn';
import Link from 'next/link';


export default function TemporaryDrawer({cates}:{cates:string[] | undefined}) {
  
  const {open, setOpen} = useContext(DrawerContext);
  const [localUser,setLocalUser] = useState<{name?:string,email?:string} | null>(null)

  const fetchUserAndList = async () => {
    const user = localStorage.getItem('24j1i2cj4io-n92nzv531')
    if (user) {
           let parsedUser = JSON.parse(user)
           if (!parsedUser) {return}
           setLocalUser(parsedUser)
    }
}
useEffect(()=>{
  fetchUserAndList()

},[])
  const router = useRouter();
  const toggleDrawer = (state:any) => {
    setOpen((prevOpen:any) => state ? state : !prevOpen); // Toggle the open state
  };

  const Lista = () => (
    <Box
      sx={{ width:  '300px',py:1 }}
      role="presentation"
      // onClick={toggleDrawer( false)}
      onKeyDown={()=>toggleDrawer( false)}
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
        
        onClick={()=>toggleDrawer(false)}>
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
            
                  <Typography component='h1'
                  className='clr2'
                  sx={{fontSize:'1em',fontWeight:600}}>
              Collections
            </Typography>
            </ListItemButton>
  

          </ListItem>
       
    
          {
            [
              'Labneh','Keshek',
              'Beverages',
              'Honey, Jams & Spreads',
              'Mouneh',
              'Olives & Olive Oil',
              
              'Sweets & Nuts',
              'Zaatar',
            ].map(i=>{
              return    <ListItem
              key={i}
              className='clr2'
              sx={{py:.2,fontSize:'.9em',fontWeight:600}}
    
              onClick={()=>{router.push(`/${i.toLocaleLowerCase()}/products`); toggleDrawer(false)}}
               disablePadding>
                <ListItemButton>
                
                      <Typography component='h1' sx={{fontWeight:600}}>
                     {i}
                </Typography>
                </ListItemButton>
      
    
              </ListItem>
             })
          }
{/* 
<Accordion sx={{border:'none',boxShadow:'none',}}>
            
            <AccordionSummary
    expandIcon={<AiOutlineArrowUp />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
 <Typography component='h1' sx={{fontWeight:600}}>
         FLAVORED HONEY
      </Typography>
  </AccordionSummary>
  <AccordionDetails>
  <List


  
     disablePadding>
<ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/flavored honey/products`)}}

>


<ListItemButton >
      <Typography sx={{fontWeight:300}}>
  View All
</Typography>
</ListItemButton>
</ListItem>

{[`Honey with Peanut`,
`Honey with Strawberry`
].map(i=>{   return  <ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/flavored honey/products?type=${encodeURIComponent(i).toLocaleLowerCase()}`)}}

key={i}>


<ListItemButton >
            <Typography sx={{fontWeight:300}}>
        {i}
      </Typography>
      </ListItemButton>
</ListItem>
      
      })}
    </List>


  </AccordionDetails>
</Accordion> */}


                  {/* <Accordion sx={{border:'none',boxShadow:'none',}}>
            
                  <AccordionSummary
          expandIcon={<AiOutlineArrowUp />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       <Typography sx={{fontWeight:400}}>
       Organic herbs
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List
  

        
           disablePadding>
<ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/organic herbs/products`)}}

>


<ListItemButton >
            <Typography sx={{fontWeight:300}}>
        -View All
      </Typography>
      </ListItemButton>
</ListItem>

{[`MACA`,
     `Milk thistle`, `Sea moss`  ,`Yohimbe bark` ,'Water pill' , `Multi vitamins`,

`Bacopa Monnieri`,
`Passion Flower`,
'Tongkat-ali','Ashwagandha'].map(i=>{   return  <ListItem sx={{padding:0,width:'100%'}}

  onClick={()=>
    {setOpen(false);
    router.push(`/organic herbs/products?type=${encodeURIComponent(i).toLocaleLowerCase()}`)}}

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
 <Typography sx={{fontWeight:400}}>
 natural supplements
      </Typography>
  </AccordionSummary>
  <AccordionDetails>
  <List


  
     disablePadding>

<ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/natural supplements/products`)}}

>


<ListItemButton >
            <Typography sx={{fontWeight:300}}>
        -View All
      </Typography>
      </ListItemButton>
</ListItem>
{[
     `GABA`,
     `Taurine`,
     `L arginine`,
     `L Lysine`,].map(i=>{   return  <ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/natural supplements/products?type=${encodeURIComponent(i).toLocaleLowerCase()}`)}}

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
 <Typography sx={{fontWeight:400}}>
 Mushrooms
      </Typography>
  </AccordionSummary>
  <AccordionDetails>
  <List


  
     disablePadding>
<ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/mushrooms/products`)}}

>


<ListItemButton >
            <Typography sx={{fontWeight:300}}>
        -View All
      </Typography>
      </ListItemButton>
</ListItem>

{[`Lions Mane`,


'Cordyceps'].map(i=>{   return  <ListItem sx={{padding:0,width:'100%'}}

onClick={()=>
{setOpen(false);
router.push(`/mushrooms/products?type=${encodeURIComponent(i).toLocaleLowerCase()}`)}}

key={i}>


<ListItemButton>
            <Typography sx={{fontWeight:300}}>
        -{i}
      </Typography>
      </ListItemButton>
</ListItem>
      
      })}
    </List>


  </AccordionDetails>
</Accordion> */}
    
      </List>
      <Link href='/about' className='decor-none' style={{color:'black'
      ,padding:' .25em 0'}}>
        <ListItemButton
        onClick={()=>toggleDrawer(false)}
        >
        
        <Typography className='clr2' sx={{ fontSize:'.9em',fontWeight:600}}>
         About Us
            </Typography>
            </ListItemButton>
      </Link>
      {!localUser &&   <Btn 
      sx={{width:'90%',mt:1,mx:'auto'}} className='' onClick={()=>{setOpen(false);router.push('/account/login')}}>
          Login
        </Btn>}
        <Btn sx={{color:'white',
        ':hover':{color:'red !Important'}
        ,background:'red',border:'1px solid red',gap:.5,width:'90%',mt:1,mx:'auto'}} 
        className='' 
        onClick={()=>{setOpen(false);router.push('/profile')}}>
         My Favorites
         <AiOutlineHeart/>
        </Btn>
        <Box sx={{width:'100px',py:2}} className="flex justify-evenly space-evenly auto items-center">

      <a style={{textDecoration:'none',borderRadius:'2000px',background:'transparent'}} href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' rel='noopener'>
    
    <Btn sx={{ border:'1px solid transparent',
    borderRadius:25,
    minWidth:'30px',
    background:'transparent',
    padding:0,':hover':{background:'transparent'}}}>
      <Box className='center flex align-center' sx={{width:'30px',ml:0}}>
      <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="Whatsapp Icon" className="img" />
      </Box>
      
     
   
    </Btn>
    </a>
    <a style={{textDecoration:'none',marginTop:3,borderRadius:'2000px',background:'transparent'}} 
    
    href={'https://www.instagram.com/mounetdalia/'} target='_blank' rel='noopener'>
    
    <Btn sx={{ border:'1px solid transparent',
    borderRadius:25,
    background:'transparent',
    minWidth:'30px',

    padding:0,':hover':{background:'transparent'}}}>
      <Box className='center flex align-center' sx={{width:'30px',ml:0}}>
      <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Whatsapp Icon" className="img" />
      </Box>
      
       
   
    </Btn>
    </a>
    </Box>

     
    
      <Divider />
      
    </Box>
  );

  return (
    <div>

          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>toggleDrawer(false)}
          >

  <Lista/>

      
      

          </Drawer>
    </div>
  );
}