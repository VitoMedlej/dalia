"use client"
import { Box } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <Box>
        <Box sx={{display:{xs:'flex',md:'none'}}}>
            <img src="https://www.petriotics.com/cdn/shop/files/2_375x250.png?v=1665495970" alt="" className="img" />
        </Box>
        <Box sx={{display:{xs:'none',md:'flex'}}}>
            <img src="https://www.petriotics.com/cdn/shop/files/15_OFF_3_1305x386.png?v=1664448008" alt="" className="img" />
        </Box>
    </Box>
  )
}

export default Index