import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'
import CrispChat from '@/Components/CrispChat/CrispChat'

export const metadata = {
    title: 'Mounet Dalia - Traditional Lebanese Food Stand',
    description: `Explore the rich flavors of Lebanon at Mounet Dalia. Our food stand crafts tradition with a modern twist, empowering women through flavor transformations. Indulge in creamy labneh, premium olives, and more.`,
    icons: {
        icon: `https://ucarecdn.com/0abc6c11-ea28-433b-a205-e289be0e95f8/WhatsAppImage20240203at1050571.jpeg`
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
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
<script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="e672ca5f-f600-4343-bb45-93aa519066f7";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
            </head>

            <body className='relative'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar />
                    <QuickCart/>
                    <ScrollToTop/>
                    <CrispChat/>
                    <main >

                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
