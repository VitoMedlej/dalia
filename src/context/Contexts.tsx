"use client"
import { createContext, useState } from "react";


export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
export const Categories = createContext < any > ([]);



 const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {

        const [open,
            setOpen] = useState(false);
        const [cartOpen,
            setCartOpen] = useState(false);
            const [cates,
                setCates] = useState([]);
            return (
                <DrawerContext.Provider value={[open, setOpen]}>
        <Categories.Provider value={[cates, setCates]}>
        <CartContext.Provider value={[cartOpen, setCartOpen]}>
        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
        {/* <Component {...pageProps}/> */}
        </CartContext.Provider>
        </Categories.Provider>
    </DrawerContext.Provider>
            )
        }

        export default ContextWrapper