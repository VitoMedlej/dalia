import Preloader2 from "@/Components/Preloader2";
import { server } from "@/Utils/Server";

const Page = ({ data } : any) => {
  return <Preloader2 data={data} />;
};

export async function getEdgeProps({ params } : any) {
  const pageNB = 0;
  const { category } = params;
  const req = await fetch(
    `${server}/api/fetch-all?page=${pageNB}&category=${
      category ? `${category}`.replace(/-/g, " ") : "collection"
    }`
  );
  const res = await req.json();
  return {
    props: {
      data: res?.data,
    },
  };
}

export default Page;