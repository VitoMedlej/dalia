import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'

const HomeSquareAd = () => {
  return (
    <Grid  maxWidth='lg' sx={{my:4}} container>
        <Grid  item xs={12} sm={6}>
            <Box sx={{px:1,color:'white',py:2,height:{xs:'400px',sm:'600px'}}} className='flex text-center bg center col auto'>

            <Box sx={{width:'170px',}} className='auto'>
                <img  src="https://fontmeme.com/temporary/ce8c208b388646c2b7075ed958b9bf7b.png" alt="" className="img contain" />
            </Box>
            <Typography sx={{fontSize:'4em',fontWeight:'bold'}} component='h1'>
                ARRIVALS
            </Typography>
            <Typography component='p'>
            These luxurious new bags pack a lot of punch!
            </Typography>
          

            <Btn sx={{margin:'2em auto',width:'200px',background:'transparent',borderRadius:1,border:'1px solid'}} >
                Shop Now
            </Btn>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box sx={{height:{xs:'400px',sm:'600px'}}}>
                <img style={{}} src="https://cdn.shortpixel.ai/spai/q_glossy+w_614+to_webp+ret_img/https://www.powproductphotography.com/wp-content/uploads/2023/03/Beauty_Product_Photography_08.jpg" alt="" className="img" />
            </Box>
        </Grid>
    </Grid>
  )
}

export default HomeSquareAd