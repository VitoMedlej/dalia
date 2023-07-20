import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
  title: 'Mini Chic Baby Wear - Baby & Kids Clothing in Lebanon',
  description: 'Shop the latest baby & kids clothing at Mini Chic Baby Wear. Our online store in Lebanon offers high-quality outfits & accessories for children 0-12 years. Discover our collection now!',
  icons: {
    icon: 'https://ucarecdn.com/3147a5e9-9b0f-47e9-b9da-c81db92429e5/324270893_997679804539366_7128257675794065283_n.jpg',
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
