"use client"
import { Box, IconButton, Typography } from '@mui/material'
// import {ImCancelCircle} from 'react-icons/im';
import {AiOutlineDelete,AiOutlineEye} from 'react-icons/ai';
// import Btn from '../Btn/Btn';
import { QuantityPicker } from '../QuantityPicker/QuantityPicker';
// import { loadState, saveState } from '../../Utils/LocalstorageFn';
// import { ICartItem } from '../../Types/Types';
import Link from 'next/link';
import { ICartItem } from '@/Types/Types';
import useCart from '@/Hooks/useCart';
import Btn from '@/Components/Btn/Btn';



const CartProduct = ({onChange,_id,price,category,title,remove,qty,img,selectedColor}:ICartItem) => {
 
    const {incrementQty} = useCart()
    console.log('selectedColor: ', selectedColor);
    return (
    <Box sx={{borderTop:'1px solid #0000001a',flex:1}}>
        <Box
            className="trans"
            sx={{
                display:'flex',
                // gap:'1em',
                py:3,
                px:0,
            flex:1,
            // padding: '1em',
            ':hover': {
                backgroundColor: '#0000000f',
                borderRadius: '6px'
            }
        }}>
            <Box
                sx={{
                mr: .5,
                width: {xs:'80px',sm:'100px'},
                height: '100px',
                borderRadius: '6px'
            }}>
                <img
                    style={{
                    borderRadius: '6px'
                }}
                    src={img && img.length > 0 ? img : 'data:image/png;base64,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'}
                    className='img contain'
                    alt="Cart Product Img"/>
            </Box>
            <Box className='wrap col flex' sx={{flex:1,display:'flex',width:'100%'}}>

                <Box>
                    <Link style={{color:'black'}} className='decor-none black' href={`/product/${_id}`} >

                    <Typography
                    className='flex  items-center align-center row gap1'
                    component='h4'
                    sx={{
                        margin: 0,
                        width:'100%',
                        cursor:'pointer',
                        fontWeight: '400',
                        fontSize:{sm:'1.1em',md:'1.3em'}
                    }}>
                       {title}
                    {selectedColor &&   <Box 
                    
                    className='flex center items-center align-center row gap1'
                    
                    sx={{width:'15px',height:'15px',border:'1px solid black',background:selectedColor,borderRadius:'50%'}}>
                        
                       </Box>}
                    </Typography>
                        </Link>
                    <Typography
                    component='h4'
                        sx={{
                        margin: 0,
                        fontWeight: '400',
                        fontSize:'.9em'
                    }}>
                       {category}
                    </Typography>
                    <h2
                        style={{
                        fontSize: '1em',
                        fontWeight: '500',
                        color: 'green',
                        margin: ' .35em 0 0 0'
                    }}>
                        ${price}
                    </h2>
                    {/* <h2
                        style={{
                        fontSize: '1.2em',
                        color: 'gray',
                        fontWeight: '500',
                        margin: ' .25em 0 0 0'
                    }}>
                        Qty: 1
                    </h2> */}
                  
                   
                    <Btn 
                    onClick={()=>remove(_id)}
                    v2={true} sx={{border:'none',padding:0,mx:0,mt:1,':hover':{background:'white'},fontSize:'.6em'}}>
                        <AiOutlineDelete 
                        color='red'
                       size='1.25em'
                        /> 
                        <Typography sx={{pt:'.1em',color:'red',fontWeight:'600',fontSize:'1em'}}>
                            
                        Remove
                        </Typography>
                    </Btn>
                    
                </Box>
                <Box
                    sx={{
                    flex: 1,
                    flexGrow: '100%',
                    display: 'flex',
                    justifyContent: {xs:'inherit',sm:'space-evenly'},
                    height: '100%',                    flexDirection: 'column',
                    alignItems: {xs:'flex-start',sm:'end'},
                   
                }}>
                    {/* <IconButton>
                        <DeleteForever
                            fontSize='medium'
                            sx={{
                            color: '#ff2b2b'
                        }}/>
                    </IconButton>
                    <IconButton>
                        <RemoveRedEye
                            fontSize='medium'
                            sx={{
                            color: '#373737'
                        }}/>
                        
                    </IconButton> */}
                    <QuantityPicker 
                    onChange={(e:number)=>{incrementQty(_id,e),onChange && onChange()}}
                    
                    min={1} max={10} value={qty > 10 ? 10 : qty}/>
                </Box>
            </Box>
        </Box>
    </Box>

    )
}

export default CartProduct