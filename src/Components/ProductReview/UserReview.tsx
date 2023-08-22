"use client"
import {Box, Typography, Rating} from '@mui/material'
import React from 'react'

const UserReview = () => {
    return (
        <Box
            sx={{
            py: 2,
            borderBottom: '1px solid #0000001a'
        }}>

            <Box className="flex">
                <Box
                    sx={{
                    width: '50px',
                    borderRadius: '50%'
                }}>
                    <img
                        style={{
                        borderRadius: '50%'
                    }}
                        src="https://scholar.harvard.edu/sites/scholar.harvard.edu/files/dancabral/files/download_0.jpeg?m=1583405578"
                        alt=""
                        className="img"/>
                </Box>

                <Box sx={{
                    pl: .5
                }}>

                    <Typography
                        sx={{
                        fontWeight: 500
                    }}
                        component={'h4'}>User Name</Typography>

                    <Rating readOnly name="simple-controlled" value={5}/>

                </Box>

            </Box>
            <Typography
                sx={{
                fontWeight: 400,
                pt: 1,
                fontSize: 15
            }}
                className='gray'
                component={'p'}>User Name</Typography>
        </Box>
    )
}

export default UserReview