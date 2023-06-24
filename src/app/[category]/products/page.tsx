"use client"

import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb"
import FilterSection from "@/Components/CollectionPage/FilterSection/FilterSection"
import ProductCard from "@/Components/ProductCard/ProductCard"
import {Box, Container,  Pagination} from "@mui/material"
import { useRouter } from "next/navigation"


const products = [
    {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }, {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }, {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }, {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }, {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }, {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }, {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }, {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }, {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }, {
        title: 'FOoer',
        _id: '124124',
        price: 25.99,
        image: ['https://cdn.shopify.com/s/files/1/0736/4571/9865/products/350830061597051530.png' +
                '?crop=center&height=240&v=1678468445&width=240'],
        category: 'fooer'
    }
]
const page = () => {
    
    const router= useRouter()
    const counted = 1;
    const page = 1
    const handlePagination = async (val:number) => {

    }
    return (
        <Container disableGutters maxWidth='lg'>
            <Box
                sx={{
                width: '100%',
                minHeight: '100px'
            }}>
                <FilterSection/>
            </Box>
            <BreadCrumb></BreadCrumb>
           

            <Box className='flex wrap' sx={{
                px: 1
            }}>
                {products && products.map(i => {
                    return <ProductCard
                        _id={i._id}
                        title={i.title}
                        price={i.price}
                        images={i.image}
                        category={i.category}/>
                })
}
            </Box>
            <Pagination
                onChange={(e, val) => {
                handlePagination(val)
            }}
                sx={{
                my: 3
            }}
                count={counted > 1
                ? counted
                : 1}
                className='flex center '/>
     

        </Container>
    )
}

export default page