"use client";
import {useContext} from 'react';
import {Drawer,List,Divider,ListItem,ListItemButton,ListItemText,ListItemIcon,Box} from '@mui/material';
import {MdPrecisionManufacturing,MdOutlineCancel} from 'react-icons/md';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import {BiCategoryAlt} from 'react-icons/bi';
import { DrawerContext } from '@/context/Contexts';


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
      sx={{ width:  'auto' }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <Box className='flex'
      sx={{margin:'0 .5em',borderBottom:'1px solid #00000040',    justifyContent: 'flex-end'}}
      
      >

              <IconButton 
        
        onClick={toggleDrawer(false)}>
                            <MdOutlineCancel
                                  color= 'red'
                              />
                        </IconButton>
                     

                                </Box>
      <List>
   
       { ['electronics','kitchen appliances','small kitchen appliances','vaccum cleaners','tvs'
       ,'heaters'
 ,      'fans'
,       'tools'
      ].map((text, index) => {
          if (!text) return;
          return <ListItem
          onClick={()=>router.push(`/category/${text}`)}
          key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <BiCategoryAlt /> : <MdPrecisionManufacturing />}
              </ListItemIcon>
              <ListItemText
              sx={{
                textTransform: 'capitalize'
              }}
              primary={text} />
            </ListItemButton>
          </ListItem>
        })
        
        }
      </List>
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