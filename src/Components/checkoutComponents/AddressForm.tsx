"use client"
import * as React from 'react';
import {Grid,Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function AddressForm({info,setInfo,handleChange}:{handleChange:any,setInfo:any,info:any}) {
 
  return (
          <Box component='form' >
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>

          <TextField
          value={info.firstName}
          onChange={handleChange}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={info.lastName}
          onChange={handleChange}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        {/* <Grid item xs={12}>
          <TextField
            required
            id="email1"
            name="email"
            label="Email "
            fullWidth
            value={info.email}
          onChange={handleChange}
            autoComplete="email"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            id="phone1"
            name="phone"
            label="Phone Number"
            fullWidth
            value={info.phone}
          onChange={handleChange}
            autoComplete="phone-number phone" 
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="city"
            name="city"
            required
            value={info.city}
          onChange={handleChange}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
          
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            value={info.address1}
          onChange={handleChange}
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          
            id="address2"
            value={info.address2}
          onChange={handleChange}
            name="address2"
            label="Notes"
            fullWidth
            rows={4}
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>

     

        
      </Grid>
        </Box>
  );
}