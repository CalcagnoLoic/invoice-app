import { useNavigate } from "react-router";

import Homepage from "../Homepage";

const Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <Homepage />
      <div
        className="fixed left-0 top-0 h-screen w-screen bg-black opacity-70"
        onClick={() => navigate("/invoice-app-web/")} /* TODO : Remplacer par le discard button */
      ></div>
      <div className="fixed left-0 top-0 h-screen w-full md:w-1/2 bg-white pl-[160px] pt-14">
        <h1 className="text-3xl">New Invoice</h1>
      </div>
    </>
  );
};

export default Page;
