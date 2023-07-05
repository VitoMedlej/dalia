import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
  title: 'Namliieh - Organic Artisan Food from Lebanon | Shop Now',
  description: 'Discover Namliieh, a Lebanese lifestyle brand crafting artisan food inspired by the landscape. Our focus on locality, seasonality, and traceability ensures organic, bespoke products',
  icons: {
    icon: 'https://ucarecdn.com/324ea34f-ef49-4d5a-b3ac-a462e85c34aa/namliiehlogo.jpeg',
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
    
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>

      <body className='relative'>

        <ContextWrapper>
        <Navbar/>
        <Sidebar cates={undefined}/>
        <QuickCart/>
        <ScrollToTop/>
          {children}
        {/* {children} */}
        </ContextWrapper>
        <Footer/>
        </body>
    </html>
  )
}
