"use client"

import Preloader3 from '../Preloader3';

const MainCarousel = ({resImages}: any) => {



    try {

        // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ next: { revalidate: 10 } })
        // const req = await fetch(`https://getpantry.cloud/apiv1/pantry/11c7944e-bdec-4962-bcad-f24fe432bca6/basket/Images`,{ next: { revalidate: 400 } })
        // let res : any = await  req.json() ;
        // let res = {data:null}
        return (
          <Preloader3 res={resImages}/>
         )
  }
  catch (e) {
    console.log('e home: ', e);
    return (
      <Preloader3 res={resImages || null}/>
     )
  
  }


   
//      const fetcher = async () => {
//     const req = await fetch(`https://getpantry.cloud/apiv1/pantry/11c7944e-bdec-4962-bcad-f24fe432bca6/basket/Images`,{ next: { revalidate: 400 } })
//     let res : any = await  req.json() ;
//     console.log('res: ', res);
//     if (res && res?.MainCarousel) {
//       setImgs(res?.MainCarousel)
//     }
//   }
//   fetcher()
   
}

export default MainCarousel