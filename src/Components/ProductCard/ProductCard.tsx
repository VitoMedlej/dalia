import { IProduct } from '@/Types/Types'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import {GrAdd } from 'react-icons/gr'
const ProductCard = ({
    title,
    price,
    images,
    category,
    _id,
    width ,
}:{_id:string,title :string,price:number | string,images : string[],category:string, width ?: string | number}) => {
  return (
    <Box className='hover-shadow cursor trans' sx={{py:1,margin:'0 auto',minWidth:'150px',width:width ? width : {xs:'49%',sm:'24%'}}}>
    <Box>
      <img src={images ? images[0] :'' } alt="" className="img" />
    </Box>
    <Box  sx={{px:.95}}  >
    <Typography className='clr' sx={{my:.5,fontWeight:'600',fontSize:'1.06em'}}>
        {price}$
      </Typography>
      <Typography sx={{fontSize:'.80em',fontWeight:'500'}}>
       {title}
      </Typography>
      <Typography sx={{fontWeight:'200',fontSize:'.76em'}}>
        {category}
      </Typography>
        <Btn v2 className='gap1' sx={{color:'black',borderColor:'black',hover:{border:'2px solid #1a4671'}}}>
            Add
            <GrAdd color='#1a4671' fontSize={'small'}/>
        </Btn>
    </Box>
</Box>
  )
}

export default ProductCard