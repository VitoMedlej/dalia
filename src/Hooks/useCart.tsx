import { useContext } from "react";
import { loadState, saveState, pushState } from "../Utils/LocalstorageFn";
import { ICartItem } from "../Types/Types";
import { useCartContext } from "@/context/Contexts";

const useCart = () => {
    const {cartOpen, setCartOpen} = useCartContext();
    const incrementQty = (_id:string,newValue ?: number) => {
        const state = loadState('list-bag') || [];
        let foundIndex = state.findIndex((value:ICartItem) => value._id === _id);
        let selectedItem = state[foundIndex];
        if (foundIndex !== -1 && selectedItem) {
            if (newValue) {selectedItem.qty = newValue; }
            else {
                selectedItem.qty = selectedItem.qty + 1;
            }

            state[foundIndex] = selectedItem

           saveState('list-bag', state)           
           return true
       }
       return false;
    }
    const addToCart = (_id:string,product:{title:string,category?:string,img:string,_id:string,price:number,description?:string},open=true) => {
        //1- get the cart from localstorage
         const increased =        incrementQty(_id)       
        if (increased) {
            setCartOpen(open ? true : false)
            return
        }
        
            //if we do not have the item in cart, insert it
        pushState('list-bag',
        {qty:1,img:product.img,
            category:product?.category || 'Collection',
            title:product.title
        ,_id:product._id,price:product.price})
        if(open) {
             
            setCartOpen(true)
        }
    }
    return {addToCart,incrementQty}
}

export default useCart