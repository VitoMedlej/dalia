import { ICartItem } from "@/Types/Types";

function totalCal(cartItems: ICartItem[]) {
    let totalPrice = 0;
    for (const item of cartItems) {
        totalPrice += item.qty * item.price;
    }
    return totalPrice;
  }
  export default totalCal