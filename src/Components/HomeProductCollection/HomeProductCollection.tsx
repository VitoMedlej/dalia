import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const HomeProductCollection = () => {
  return (
    <Box sx={{my:4}}>
            <Typography
                className='sectionTitle box'
                sx={{
                  pb:'.5em',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '600'
            }}>
                Explore Different Categories
            </Typography>
              <Box sx={{mb:2}} className='flex wrap gap1 justify-center'>
                  {[1,2,3,4,5,6,6,7].map(i=>{

                      return <ProductCard key={i} title={"ITEM NAME"} price={124} _id={"FASF"} 
                       images={['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/335960041594900903.png?crop=center&height=240&v=1678468381&width=240']}
                       category={"category"}/>
                  })}
              </Box>
            </Box>
  )
}

export default HomeProductCollection