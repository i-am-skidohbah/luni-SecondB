import React from "react";
import enugu from "../Assests/assets/blogs/enugu-gov.jpg";
import partnership from "../Assests/promo/partnership.png";
import solarator from "../Assests/products/1.5kw-scalable-hybrid-lithium-solarator.jpg";
import { Link } from "react-router-dom";
const Fields = () => {
  return (
    <div className="md:pt-1 md:pb-10 md:px-12 py-10 px-5  bg-white">
      <div className="grid grid-col-1 gap-x-4 gap-y-2 md:grid-cols-3  items-center justify-center w-full">
        <div className="h-[500px] relative hero rounded-xl flex items-center relative justify-center py-6 px-2">
          <img
            src={enugu}
            className="w-full object-cover h-full absolute top-0  opacity-100"
            alt=""
          />
          <div className="w-3/4 py-5 px-2 relative flex flex-col items-center ">
            <h1 className="text-center text-base text-white py-1 text-red-600 capitalize font-bold">
              Breaking News
            </h1>
            <h1 className="text-2xl text-center text-white py-1 uppercase font-bold">
            JUST IN: Enugu gov't clarifies position on purported solar energy tax. 
            </h1>
            <hr className="w-12  h-1 bg-white " />
            <p className="text-xl py-4 text-white text-center font-normal capitalize">
            The Enugu State Government has clarified its position on the reports over the collection of industrial gas emission levy
            </p>{" "}
            <button className="text-center px-6 py-4 font-bold capitalize text-white bg-black rounded-xl">
              Read more
            </button>
          </div>
        </div>
        <div className="h-[500px] relative hero rounded-xl flex items-center relative justify-center py-6 px-2">
          <img
            src={partnership}
            className="w-full object-cover h-full absolute top-0  opacity-100"
            alt=""
          />
          <div className="w-3/4 py-5 px-2 relative flex flex-col items-center">
            <h1 className="text-center text-base text-red-600 py-1 capitalize font-bold">
            Breaking News: 
            </h1>
            <h1 className="text-2xl text-center text-white py-2 uppercase font-bold">
            Expect a solar energy revolution in Nigeria 
            </h1>
            <hr className="w-12  h-1 bg-white " />
            <p className="text-xl py-4  text-white text-center font-normal capitalize">
            As Lightup Nigeria Solar Power Ltd becomes Access Bank Plc official solar vendor. 
            </p>{" "}
            <button className="text-center px-6 py-4 font-bold capitalize text-white bg-black rounded-xl">
              Read more
            </button>
          </div>
        </div>
        <div className="h-[500px] relative  hero rounded-xl flex items-center justify-center py-6 px-2">
          <img
            src={solarator}
            className="w-full object-cover h-full absolute top-0  opacity-100"
            alt=""
          />
          <div className="w-3/4 py-5 px-2 relative flex flex-col items-center">
            <h1 className="text-center text-base text-white py-1 capitalize font-thin">
              Convenience
            </h1>
            <h1 className="text-2xl text-center text-red-600 py-1 uppercase font-bold">
            Earn ₦1,000,000.00 with Lightup Nigeria Solar Power Ltd!
            </h1>
            <hr className="w-12  h-1 bg-white " />
            <p className="text-xl py-2 text-white text-center mb-5 font-normal capitalize">
            Are you ready to become a LUNI Solar Millionaire? 
            Lightup Nigeria Solar Power Ltd is offering you an incredible opportunity to earn while promoting renewable energy! 
            </p>{" "}
            <button className="text-center px-6 py-4 font-bold capitalize text-white bg-black rounded-xl">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fields;
