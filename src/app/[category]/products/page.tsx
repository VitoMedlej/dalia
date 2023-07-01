import Preloader2 from "@/Components/Preloader2"
import {server} from "@/Utils/Server"

const Page = async(ctx : any) => {
    const pageNB = 0;
    const {category} = ctx.params;
    console.log('category: ', category);

    const req = await fetch(`${server}/api/fetch-all?page=${pageNB}&category=${category
        ? `${category}`.replace(/-/g, ' ')
        : 'collection'}`,{cache: 'no-cache'})
    const res = await req.json()
    console.log('res: ', res);

    return (<Preloader2 data={res
        ?.data}/>)
}

export default Page