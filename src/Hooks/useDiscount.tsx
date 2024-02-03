import { useState, useEffect } from 'react';

const useDiscount = (price:number) => {
  const [isFirstOrder, setIsFirstOrder] = useState(false);

  // useEffect(() => {
  //   // Check if it's the first order
  //   const storedFirstOrderFlag = localStorage.getItem('isFirstOrder');
  //   console.log('storedFirstOrderFlag: ', storedFirstOrderFlag);

  //   if (storedFirstOrderFlag === null) {
  //     setIsFirstOrder(true);
  //     localStorage.setItem('isFirstOrder', 'true'); // Set to 'false' after the first order
  //   } else {
  //     setIsFirstOrder(storedFirstOrderFlag === 'true');
  //   }
  // }, []);

  const calculateDiscount = () => {
    return isFirstOrder ? Number(price * 0.9)?.toFixed(1) : price?.toFixed(1);
  };

  return {discountedPrice: calculateDiscount(),isFirstOrder};
};

export default useDiscount;
