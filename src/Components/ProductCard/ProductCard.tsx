import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'
const ProductCard = ({
    title,
    price,
    images,
    category,
    _id,
    width,
    height
} : {
    _id: string,
    title: string,
    price: number,
    images: string[],
    category: string,
    width?: string | number
    height?: string | number
}) => {
    const router = useRouter()
    const {addToCart}= useCart()

    return (
        <Box
            className='hover-shadow  trans'
            sx={{
            py: 1,
            margin: '.25em auto',
            boxShadow: `rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px`,
            minWidth: {xs:'130px',sm:'32%',md:'283px'},
            width: width
                ? width
                : {
                    xs: '47%',
                    sm: '23%'
                }
        }}>
            <Box 
            className='cursor'
               onClick={() => router.push(`/product/${_id}`)}
            sx={{
                height: height || {xs:'180px',sm:'300px',md:'350px'}
            }}>
                <img
                    src={images
                    ? images[0]
                    : ''}
                    alt=""
                    className="img"/>
            </Box>
            <Box 
            sx={{
                px: .95
            }}>
                <Typography
                    className='clr'
                    sx={{
                    my: .5,
                    fontWeight: '600',
                    fontSize: '1.06em'
                }}>
                    {price}$
                </Typography>
                <Typography
            className='limited cursor '

                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                    fontSize: {xs:'.80em',sm:'.95em'},
                    fontWeight: '500'
                }}>
                    {title}
                </Typography>
                <Typography
                    sx={{
                    fontWeight: '200',
                    fontSize: '.76em'
                }}>
                    {category}
                </Typography>
                <Btn
            className='cursor gap1'
                
                     onClick={()=>addToCart(_id,{title,category,img:images[0],_id,price},true)}
                    v2
                    sx={{
                    color: 'black',
                    borderColor: 'black',
                    hover: {
                        border: '2px solid #1a4671'
                    }
                }}>
                    Add
                    <GrAdd color='#1a4671' fontSize={'small'}/>
                </Btn>
            </Box>
        </Box>
    )
}

export default ProductCard