"use client";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {AiOutlineArrowUp} from 'react-icons/ai';
import { Box } from '@mui/material';


const FAQs = [
  {
    "Q": "What is Truenaturalblend and what do you sell?",
    "A": "Truenaturalblend is an online store devoted to providing natural supplements that promote health and wellness. Our products include premium-quality organic herbs and mushrooms such as ashwagandha, tongkat ali, cordyceps, lion’s mane, and more."
  },
  {
    "Q": "Are your products organic?",
    "A": "Absolutely! We only offer organic herbs and mushrooms that are sustainably sourced and processed with the utmost care. We believe that natural is better and we are committed to providing you with the highest-quality products."
  },
  {
    "Q": "How long does shipping take?",
    "A": "Shipping times may vary depending on your location and the shipping method you choose. We offer standard shipping which usually takes 3-5 business days within the US. Please note that international shipping may take longer. You will receive a tracking number once your order has been shipped."
  },
  {
    "Q": "What is your return policy?",
    "A": "We want you to be 100% satisfied with your purchase, so we offer a 30-day money-back guarantee on all our products. If you’re not happy with your purchase, simply contact us and we’ll be happy to assist you with a return or exchange."
  },
  {
    "Q": "Do you offer any discounts or promotions?",
    "A": "Yes, we do! We offer regular discounts and promotions for our loyal customers. Sign up for our newsletter to stay in the loop about our latest deals and discounts. You can also follow us on social media for exclusive offers and giveaways."
  },
]

export default function FAQ() {
  return (
    <Box className='auto' sx={{maxWidth:'md',mt:3}}>
      {FAQs.map(qa=>{
        return <Accordion key={qa.Q} sx={{mt:0}}>
        <AccordionSummary
          expandIcon={<AiOutlineArrowUp />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{qa.Q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {qa.A}
          </Typography>
        </AccordionDetails>
      </Accordion>
      })}

     
    </Box>
  );
}