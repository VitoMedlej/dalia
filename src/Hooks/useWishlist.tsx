import {useContext} from "react";
import {loadState, saveState, pushState} from "../Utils/LocalstorageFn";
import {ICartItem} from "../Types/Types";
// import {useChipContext} from "@/context/Contexts";

const useCart = () => {
    // const {chipStatus, setChipStatus} = useChipContext();

    const addtoWishlist = (_id : string, product : {
        stock: any;
        title: string,
        category?: string,
        img: string,
        _id: string,
        price: number,
        selectedColor?: string
    }, open = true) => {


        const existingWishlist = loadState('Wshilost9b1z') || [];

        const productIndex = existingWishlist.findIndex((item:any) => item._id === _id);
    
        let statusText = '';
    
        if (productIndex !== -1) {
            existingWishlist.splice(productIndex, 1);
            statusText = 'Removed from Wishlist';
        } else {
            existingWishlist.push({
                img: product.img,
                category: product.category || 'Collection',
                title: product.title,
                stock: product?.stock,
                _id: product._id,
                price: product.price
            });
            statusText = 'Added to Wishlist';
        }
    
        saveState('Wshilost9b1z', existingWishlist);
    
        // setChipStatus({severity: 'success', open: true, text: statusText});
        // pushState('Wshilost9b1z', {
        //     img: product.img,
        //     category: product
        //         ?.category || 'Collection',
        //     title: product.title,
        //     _id: product._id,
        //     price: product.price
        // })
        
        // setChipStatus({severity: 'success', open: true, text: 'Added To Wishlist!'})
    }
    return {addtoWishlist}
}

export default useCart