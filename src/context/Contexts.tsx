"use client"
import { createContext, useContext, useState } from "react";


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
                <DrawerContext.Provider value={{open,setOpen}}>
        <Categories.Provider value={{cates, setCates}}>
        <CartContext.Provider value={{cartOpen, setCartOpen}}>
        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
   
        </CartContext.Provider>
        </Categories.Provider>
    </DrawerContext.Provider>
            )
        }

export default ContextWrapper

export const useDrawerContext = () => useContext(DrawerContext);
export const useCartContext = () => useContext(CartContext);
export const useCategoriesContext = () => useContext(Categories);
