
// "use client"
import PreLoader from "@/Components/PreLoader"
// import { server } from "@/Utils/Server"
// import { IProduct } from "@/Types/Types"
// import { server } from "@/Utils/Server"
// import { Box,  Container, Typography } from "@mui/material"
// import { useEffect, useState } from "react"
// https://www..com/view_video.php?viewkey=ph637450f5f16fd
// export default async function Home() {
  export default async function Home() {
//   const [data,setData] = useState< {
//     products: IProduct[] | never[] ; 
//     featuredProducts:IProduct[] | never[];
// }>({
//     products : [],
//     featuredProducts :[]
//   })

//    const InitialFetch = async () => {
//     try {
  
//       const req = await fetch(`${server}/api/get-data`,{ next: { revalidate: 400 } })
//       const res = await req.json()
    
//       if (res?.success && res?.data) {
//         setData(res?.data)
//       }
//       return null
//     }
//     catch(er) {
//       console.log('er getAll: ', er);
  
//     }
//   }
//   useEffect(() => {
    
//     InitialFetch()

//   }, [])
try {

      // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ next: { revalidate: 10 } })
    const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ cache: 'no-store',next:{revalidate:0} })
    //  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`)
      let res = await req.json();
      console.log('res: ', res);
      // const reqImages = await fetch(`https://getpantry.cloud/apiv1/pantry/732d3c8c-d53a-4c4c-830c-fe9b7e021958/basket/Images`,{  cache:'no-store', next: { revalidate: 400 } })
      // let resImages : any = await  reqImages.json();
      let resImages : any ={}
      // let res = {data:null}
      
      return (
        <PreLoader resImages={resImages || null} data={res?.data}/>
       )
}
catch (e) {
  console.log('e main home: ', e);
  return (
    <PreLoader resImages={null} data={ null}/>
   )

}
    


}
