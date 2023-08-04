"use client"
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import { useParams } from 'next/navigation';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

export default function ActiveLastBreadcrumb() {
  const {category} = useParams()
  return (
      <Breadcrumbs sx={{fontSize:'.98em',mt:4,mb:1,mx:1}} aria-label="breadcrumb">
        <Link underline="hover" className='clr' href="/">
          Home
        </Link>
        <Link
        className='gray' 
          underline="hover"
          href={`/collection/products`}
        >
          {category ? category : 'Collection'}
        </Link>
        {/* <Link
        className='gray' 
        underline="hover"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link> */}
      </Breadcrumbs>
  );
}