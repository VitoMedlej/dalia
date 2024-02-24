"use client"
import { Box, Typography, Rating, TextField } from '@mui/material';
import React from 'react'
import Btn from '../Btn/Btn';
import { useParams } from 'next/navigation';

const ReviewForm = ({data,setData}:any) => {
    const {productId} = useParams()

  const [review,setReview] = React.useState({reviewerDetails:{name:'',reviewerEmail:''},reviewText:'',reviewStars:5});
  
  
  const handleEmailChange = (e : any) => {
    const updatedReviewerDetails = { ...review.reviewerDetails, reviewerEmail: e.target.value };
    setReview({ ...review, reviewerDetails: updatedReviewerDetails });
  };
  const handleNameChange = (e : any) => {
    const updatedReviewerDetails = { ...review.reviewerDetails, name: e.target.value };
    setReview({ ...review, reviewerDetails: updatedReviewerDetails });
    
  };
  
  
const handleSubmit = async () => {
    if (!review.reviewerDetails || !productId || !review.reviewerDetails.name || !review.reviewerDetails.reviewerEmail || !review.reviewText) {
        return;
    }
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/add-review`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({productId,
            review}) // Assuming 'review' contains your review data
        });
        
        const res = await response.json();
        if (res?.success) {
            if (data?.product && data?.product?.reviews) {
                const updatedProduct = {
                    ...data.product,
                    reviews: [...data?.product?.reviews, review]
                  };
                
                  setData({
                    product: updatedProduct,
                    moreProducts: data?.moreProducts
                  });
            }
            else {
                const updatedProduct = {
                    ...data.product,
                    reviews: [ review]
                  };
                
                  setData({
                    product: updatedProduct,
                    moreProducts: data?.moreProducts
                  });
            }
            setReview({reviewerDetails:{name:'',reviewerEmail:''},reviewText:'',reviewStars:5})
        }

      } catch (error) {
        console.error('Error:', error);
      }

  }
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
                    value={review.reviewStars}
                    onChange={(event, newValue) => {
                        setReview({...review,reviewStars:Number(newValue) });
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
                    name='name'
                    value={review.reviewerDetails.name}
                    onChange={handleNameChange}

                    sx={{
                    width: '49%'
                }}
                    variant="outlined"/>


                <TextField
                name='email'
                value={review.reviewerDetails.reviewerEmail}
                onChange={handleEmailChange}
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
                onChange={(e)=>{setReview({...review,reviewText:e.target.value})}}
                value={review.reviewText}
                rows={4}
                variant="outlined"/>
            <Btn
            
            disabled={!review.reviewerDetails || !productId || !review.reviewerDetails.name || !review.reviewerDetails.reviewerEmail || !review.reviewText}
            onClick={()=>handleSubmit()}
                sx={{
                borderRadius: 1,
                color:'black',
                mt:2,
                border: 'none'
            }}> 
                Submit Review
            </Btn>
        </Box>
    )
}

export default ReviewForm