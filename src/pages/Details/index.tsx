import { useParams } from "react-router-dom";

const Page = () => {
  const { id } = useParams();
  return <h1>details for {id}</h1>;
};

export default Page;
