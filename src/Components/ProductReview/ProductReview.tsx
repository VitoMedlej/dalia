"use client"

import {Divider, Grid, Box, Typography, Rating, TextField} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn';
import UserReview from './UserReview';
import ReviewForm from './ReviewForm';





const ProductReview = ({reviews,data,setData}:any) => {

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
                        Product Reviews:
                    </Typography>
                    <Box>
                   {!reviews || reviews?.length < 1 ?     <Typography className='gray' component={'p'}>
                            No reviews yet
                        </Typography> :

                        <>
                        {
                            reviews.map((review:any) =>{

                            return    <UserReview key={review?.reviewText} review={review}/>
                            })
                        }

                        </>

                        }
                    </Box>
                </Box>
            </Grid>

            <Grid sx={{
            mt: 4
        }} xs={12} sm={6} item>
            <ReviewForm data={data} setData={setData}/>
              
            </Grid>
        </Grid>
    )
}

export default ProductReview