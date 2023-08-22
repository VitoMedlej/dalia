"use client"
import { Box, Typography, Rating, TextField } from '@mui/material';
import React from 'react'
import Btn from '../Btn/Btn';

const ReviewForm = () => {
  const [Stars, setStars] = React.useState<number | null>(0);

    return (
        <Box className='flex col' sx={{
            mx: 1
        }}>
            <Typography
                sx={{
                fontWeight: 600,
                pt: 1.2
            }}>
                Write a Review - Your Email will not be published.
            </Typography>

            <Box sx={{
                my: 2
            }}>

                <Typography className='gray' component='p'>
                    Rating:
                </Typography>
                <Rating
                    name="simple-controlled"
                    value={Stars}
                    onChange={(event, newValue) => {
                    setStars(newValue);
                }}/>
            </Box>
            <Typography component='p' className='gray'>
                Review:
            </Typography>
            <Box
                className='gap flex justify-between'
                sx={{
                mb: 2
            }}>

                <TextField
                    id="filled-multiline-flexible"
                    label="Your Name"
                    sx={{
                    width: '49%'
                }}
                    variant="outlined"/>
                <TextField
                    sx={{
                    width: '49%'
                }}
                    id="filled-multiline-flexible"
                    label="Email (Will Not Be Shown)"
                    variant="outlined"/>
            </Box>

            <TextField
                id="filled-multiline-flexible"
                label="Your Review"
                multiline
                rows={4}
                variant="outlined"/>
            <Btn
                v2
                sx={{
                borderRadius: 1,
                border: 'none'
            }}>
                Submit
            </Btn>
        </Box>
    )
}

export default ReviewForm