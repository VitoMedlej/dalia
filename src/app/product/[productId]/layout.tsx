import { server } from '@/Utils/Server'
import Head from 'next/head'
import React from 'react'


export const metadata = {
  title: 'Namliieh - Organic Artisan Food from Lebanon | Shop Now',
  description: 'Discover Namliieh, a Lebanese lifestyle brand crafting artisan food inspired by the landscape. Our focus on locality, seasonality, and traceability ensures organic, bespoke products',
  icons: {
    icon: 'https://ucarecdn.com/ea97c4e8-1111-4d33-a2ec-e4edad0f0ab8/WhatsAppImage20230627at170849.jpeg',
},
}
const layout =  ({children}:any) => {

  return (
    <>
    <main >
            {children}
    </main>
    </>
  )
}

export default layout