"use client"
import { IProduct } from "@/Types/Types";
import Btn from "../Btn/Btn";
import { useEffect, useState } from "react";
import useWishlist from "@/Hooks/useWishlist";
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { loadState } from "@/Utils/LocalstorageFn";


const WishlistButton = ({ productId, product ,onRemove} : {onRemove?: (id:string) => void,productId : string, product : any}) => {
    const [liked, setLiked] = useState(false);
    const { addtoWishlist } = useWishlist();

    useEffect(() => {
        const existingWishlist = loadState('Wshilost9b1z') || [];
        const isLiked = existingWishlist.some((item: any) => item?._id === productId);
        setLiked(isLiked);
    }, [productId]);

    const handleWishlistToggle = () => {
        if (liked && onRemove) {
            onRemove(productId); // Call the onRemove function when unliking
        } else {
            addtoWishlist(productId, { ...product, img: product?.images[0] });
        }
        setLiked(prevLiked => !prevLiked);
    };
    return (
  


<Btn
            className='cursor '
            onClick={handleWishlistToggle}
                 
                   v2 
                    sx={{
                        fontWeight:300,
                        // color:'red !Important',
                        ':hover':{
                            background:'transparent',
                        },
                        // width:{xs:'100%',sm:'30%'},
                        width:'20px',
                        height:'20px',
                        border:'none',
                        py:0,
                        fontSize:'1.5em',
                    borderRadius:0,
                 
                }}>
                  {liked
                  ?
                  <img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/128/20/20119.png" alt="" className="img" />
                  :
                  <img style={{width:'20px',height:'20px'}} src="https://cdn-icons-png.flaticon.com/128/3898/3898377.png" alt="" className="img" />
                  }                    
                </Btn>
    );
};

export default WishlistButton