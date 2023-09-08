import { ICartItem } from "@/Types/Types";

function totalCal(cartItems: ICartItem[]) {
    // if (!item?._id) return;
    if (!cartItems) return 0;
    let totalPrice = 0;
    for (const item of cartItems) {
        if (item?._id && Number(item?.price)) {

            totalPrice += item?.qty * Number(item?.price);
        }
    }
    return Number(totalPrice) + 3 ;
  }
  export default totalCal