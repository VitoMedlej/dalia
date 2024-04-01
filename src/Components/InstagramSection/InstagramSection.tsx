"use client"
import { Container, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";



const InstagramPosts = () => {
  const [posts, setPosts] = useState<any>([
    `https://ucarecdn.com/e368fef3-c842-42b6-99de-a2d54f411d97/432267292_372042839067624_1767004751327175377_n.jpg`,
    `https://ucarecdn.com/ba0b18c4-b826-4ec2-ba6a-2def3e338e55/429819698_298922579580171_5462690506327175383_n.jpg`,
    `https://ucarecdn.com/3333878f-d786-4b1b-a17e-647bdc0fae77/409086571_767260085360159_351687507480726168_n.jpg`

  ]);

    const fetchDataAndSetImgs = async () => {
        try {
          const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-posts`,{next:{revalidate:100}})

      
          if (!req?.ok) {
            throw new Error(`Failed to fetch data. Status: ${req?.status}`);
          }
      
          const data = await req.json();
          setPosts(data?.posts); // Assuming 'record' is the property containing the images in the response
          console.log('Data fetched and set to setImgs:');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
    // useEffect(() => {
      
    
      //  fetchDataAndSetImgs()
    // }, [])

    const animate = () => {
      gsap.to('.title-3', {
        opacity: 1,
        duration: .5,
        y:0,
        stagger: 0.2,

        scrollTrigger: {
          trigger:'.title-3',
          markers:false,
          start:'top 85% ' 
        }
      });
      for (let index = 0; index < 4; index++) {
        gsap.to( `.post-${index}`, {
          opacity: 1,
          duration: .5,
          y:0,
          delay:Number(index) * Number(0.1),
          stagger: 0.2,
          scrollTrigger: {
            trigger:`.post-${index}`,
            markers:false,
            start:'top 85% ' 
          }
        });
    }
  }
    useEffect(() => {
      animate()
    }, []);

    

  return (
    <Box sx={{mb:16,pt:4}}>
    
    <Typography  sx={{fontSize:'1.5em',fontWeight:600,py:4}} className='center title-3 op0 y1 auto text-center' >
      Follow Us On Instagram <span className='underline'>
      @mounetdalia
      </span>
    </Typography>

    <Container className='flex row wrap ' sx={{
      justifyContent:{xs:'center',sm:'space-between'},
      px:1}}>
      {posts && posts?.map((post:any,idx:number) => (
        <Box   sx={{my:1,width:{xs:'98%',sm:'48%',md:'32%'}}} className={`op0 y1 post-${idx}`} key={post}>
          <img className='img' src={`${post}`} alt={post} />
        </Box>
      ))}
    </Container>
      </Box>
  );
};

export default InstagramPosts;
