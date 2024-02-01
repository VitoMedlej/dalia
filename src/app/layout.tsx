import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'Mounet Dalia - Traditional Lebanese Food Stand',
    description: `Explore the rich flavors of Lebanon at Mounet Dalia. Our food stand crafts tradition with a modern twist, empowering women through flavor transformations. Indulge in creamy labneh, premium olives, and more.`,
    icons: {
        icon: `https://ucarecdn.com/a1106da8-d56a-4cef-a9ee-4b27e18ef36c/Beeorganiclogo1.png`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;500;700&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"></link>
            </head>

            <body className='relative'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    <ScrollToTop/>
                    <main >

                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
