"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import PaymentForm from './PaymentForm';
import { useEffect, useState } from 'react';
import AddressForm from '@/Components/checkoutComponents/AddressForm';
import ReviewForm from '@/Components/checkoutComponents/ReviewForm';
import { server } from '@/Utils/Server';
import { loadState, saveState } from '@/Utils/LocalstorageFn';



const steps = ['Shipping address', 'Review your order'];

function getStepContent(step: number,setInfo:any,handleChange:any,info:any,setActiveStep:any) {
  switch (step) {
    case 0:
      return <AddressForm setInfo={setInfo} handleChange={handleChange} info={info} />;
    // case 1:
    //   return <PaymentForm />;
    case 1:
      return <ReviewForm setActiveStep={setActiveStep} />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [info,setInfo] = useState({
    firstName:'',
    lastName:'',city:'',email:'',phone:'',address1:'',address2:''  })
    const handleChange = (e: any) => {
      setInfo({
        ...info,
        [e.target.name]:e.target.value
      })
    }



    const handleNext = () => {
      if (info && info.email && info.firstName && info.lastName && info.address1 && info.phone) {
        saveState('ordr-inf',info)
        setActiveStep(activeStep + 1);
      
      } 
      
    };




    const saved = activeStep === steps.length


    const saveOrder = async () => {
      const products = loadState('cart-items')
 

      const total = 10
      if (products && info && total) {

        // saveState('order',{info,products,total})
        const rawResponse = await fetch(`${server}/api`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({order:{info,products,total}})
        });
  const content = await rawResponse.json();
}
  }


  
  useEffect(() => {
    
    if (saved) {
      saveOrder()
    }
    
  }, [saved])
  
  return (
  <>

  <ThemeProvider theme={theme}>
      <CssBaseline />
  
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number has been recorded! We will message you soon, so please stay alert.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep,setInfo,handleChange,info,setActiveStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                    type='submit'
                     form="myform"
                  // variant="contained"
                  onClick={handleNext}
                  // sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  </>

  );
}