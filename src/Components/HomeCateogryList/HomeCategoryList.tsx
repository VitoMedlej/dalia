"use client"
import {Box, Grid, Typography} from "@mui/material"
import CategoryItem from "./CategoryItem"
import {useRef, useEffect} from "react";
// import staticData from '../../staticData.json'

const Category = () => {
    const CategoryItems = [
        {phone:true,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzV5iAYOc3DHmhnWvlNY34jNLhRqbsoyy8ATsmSgp8RLnCZX6Cnmx_Ow6enbJJd0cwD8&usqp=CAU'},
        {phone:true,img:'https://m.media-amazon.com/images/I/61d0CfadHeL._AC_UF894,1000_QL80_.jpg'},
        {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnt9VX16y7SwRsCACz-Lyn6UzTSiXVj9kf37hfGlHZ3d-eO9m-esk5qUb76lnxYlX73qk&usqp=CAU'},
        {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDGH-8txkV9wZFMTsRkSIJ8r659UxKZfdU8kZTdbVRuWKYOvVdqcwJM82oyWxXN9lJZE&usqp=CAU'}]




    return (

        <Box
            sx={{
                width:'100%',
            mt: {
                xs: '4em',
                sm: '6em'
            },
            mx: {
                xs: '3vw',
                lg: 'auto'
            }
        }}>
            <Typography
                className='sectionTitle text-center center auto box'
                sx={{
                pb: '.5em',
                px:1,
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '300'
            }}>
                Explore Different Categories
            </Typography>

            <Grid
                container
                sx={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                <Grid xs={12} md={4.3} item>
                    <CategoryItem
                        href='apartment'
                        phone={true}
                        height='250px'
                        desktopHeight='410px'
                        img={`https://res.cloudinary.com/dwcu3wcol/image/upload/v1655630715/Static/improved_mj65wv.jpg`}/>
                </Grid>

                <Box
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: {
                        xs: "100%",
                        md: "64.1%"
                    }
                }}>
                    {CategoryItems && CategoryItems.length > 0 && CategoryItems.map((item:any) => {

                        return <Grid key={item.img} xs={12} sm={6} item>
                            <CategoryItem
                                href={item.href}
                                title={item.title}
                                height='200px'
                                phone={item.phone}
                                img={`${item.img}`}/>
                        </Grid>
                    })}

                </Box>

            </Grid>
        </Box>

    )
}

export default Category