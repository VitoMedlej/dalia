"use client"
import {Box, Typography} from "@mui/material"
import {useRouter} from "next/navigation"
// import {ICategoryItem} from "../../src/Types"


const CategoryItem = ({img, desktopHeight,phone,height, href, title} : any) => {
    const router = useRouter()

    return (
        <Box
            className='box'
            onClick={() => router.push(`/real-estate-and-homes/${href}`)}
            sx={{
            display : {xs:phone ? 'flex' : 'none',sm:'flex'},
            height: {
                xs: `${height 
                    ? height
                    : '150px'}`,
                sm: desktopHeight? desktopHeight: height 
            },
            position: 'relative',
            // m: '5px',
            cursor: 'pointer',
            transition: '.2s ease',
            overflow: 'hidden'
        }}>
            <Box className='layerText'>
                <Typography fontSize='1.4em'>
                    {title}
                </Typography>
            </Box>
            <Box
                className='layered'
                sx={{
                width: '100%',
                position: 'absolute',
                height: `100%`,
                borderRadius: '4px'
            }}>
                
                <img  className='img BR' src={`${img}`} alt="Category Image"/>
            </Box>
        </Box>
    )
}
export default CategoryItem