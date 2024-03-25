"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { loadState, saveState } from "@/Utils/LocalstorageFn";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
export const Categories = createContext < any > ([]);
export const LangContext = createContext < any > ('en');
export const DiscountContext = createContext < any > (0);
export const PromoContext = createContext < any > (0);


 const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {


        const [discountedPrice, setDiscountedPrice] = useState(0);
        const [promoCode, setpromoCode] = useState(null);
        
        const [open,
            setOpen] = useState(false);

        const [cartOpen,
            setCartOpen] = useState(false);
            const [cates,
                setCates] = useState([]);
                const [lang,
                    setLang] = useState('en');
                        // Load language from localStorage on component mount
                        gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {

        const savedLang = loadState('NULLABLEVALUE');
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);

    // Save language to localStorage whenever it changes
    useEffect(() => {
        saveState('NULLABLEVALUE', lang);
    }, [lang]);
            return (
                <PromoContext.Provider value={{promoCode,setpromoCode}}>


                <DiscountContext.Provider value={{discountedPrice,setDiscountedPrice}}>
               
                <DrawerContext.Provider value={{open,setOpen}}>
        <Categories.Provider value={{cates, setCates}}>
            
        <CartContext.Provider value={{cartOpen, setCartOpen}}>
        <LangContext.Provider value={{lang, setLang}}>

        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
            </LangContext.Provider>
   
        </CartContext.Provider>
        </Categories.Provider>
    </DrawerContext.Provider>
    </DiscountContext.Provider>
    </PromoContext.Provider>
            )
        }

export default ContextWrapper

export const useDrawerContext = () => useContext(DrawerContext);
export const useCartContext = () => useContext(CartContext);
export const useCategoriesContext = () => useContext(Categories);
export const useLangContext = () => useContext(LangContext);
export const useDiscountContext = () => useContext(DiscountContext);
export const usePromoContext = () => useContext(PromoContext);
