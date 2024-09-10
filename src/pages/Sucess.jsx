import React from "react";
import sucess from "../Assests/pending.png";
import { Link } from "react-router-dom";

const Sucess = () => {
  return (
    <div className="h-[600px] bg-white flex flex-col justify-center items-center">
      <div className="w-full flex justify-end  items-center ">
        <div className="w-full flex justify-center flex-col items-center">
          <img src={sucess} alt="" className="w-44 h-44    object-top" />
          <h1 className="text-2xl text-center w-full md:w-1/4">
            your payment has been registered Kindly wait for confirmation
          </h1>
        </div>
      </div>
      <div className="py-5">
        <Link to="/">
          <button className="bg-green-600 py-3 px-3 text-white rounded-lg">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sucess;
