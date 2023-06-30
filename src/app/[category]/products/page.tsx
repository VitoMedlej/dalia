// "use client"

import Preloader2 from "@/Components/Preloader2"
import { server } from "@/Utils/Server"




const Page = async (ctx:any) => {
  const pageNB = 0;
  const {category} = ctx.params;
  console.log('ctx.params: ', ctx.params);
  // const [pageNB,setPageNB] = useState(0)
  // const router = useRouter()



    // const [data,setData] = useState< {
    //     products: IProduct[] | never[] ; 
       
    // }>({
    //     products : [],
       
    //   })
  
    const req = await fetch(`${server}/api/fetch-all?page=${pageNB}&category=${`${category}`.replace(/-/g, ' ')}`)
    const res = await req.json() 
      //  const InitialFetch = async () => {
      //   try {
      
      //     const req = await fetch(`${server}/api/fetch-all?page=${pageNB}&category=${ category.replace(/-/g, ' ')}`)
      //     const res = await req.json()
        
      //     if (res?.success && res?.data) {
      //       setData(res?.data)
      //     }
      //     return null
      //   }
      //   catch(er) {
      //     console.log('er getAll: ', er);
      
      //   }
      // }
      // useEffect(() => {
        
      //   InitialFetch()
    
      // }, [])
      

    return (
        <Preloader2 data={res?.data}/>
    )
}

export default Page