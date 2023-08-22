"use client"
import {Divider, Grid, Box, Typography, Rating, TextField} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn';
import UserReview from './UserReview';
import ReviewForm from './ReviewForm';





const ProductReview = () => {

    return (
        <Grid container sx={{py:4}}>
      
            <Grid sx={{
            mt: 4
        }} xs={12}  sm={6} item>

                <Box sx={{
                    mx: 1
                }}>
                    <Typography
                        sx={{
                        fontWeight: 600,
                        pb: .25,
                        pt: 1.2
                    }}>
                        Product Review:
                    </Typography>
                    <Box>
                   {false ?     <Typography className='gray' component={'p'}>
                            No reviews yet
                        </Typography> :

                        <>
                     
                      <UserReview/>

                        </>

                        }
                    </Box>
                </Box>
            </Grid>

            <Grid sx={{
            mt: 4
        }} xs={12} sm={6} item>
            <ReviewForm/>
              
            </Grid>
        </Grid>
    )
}

export default ProductReview