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
    icon: 'https://ucarecdn.com/92989d57-0dd8-40f7-9b2b-7ab889e5cd11/343109195_759962312285830_7168937497940647871_n.jpg',
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
