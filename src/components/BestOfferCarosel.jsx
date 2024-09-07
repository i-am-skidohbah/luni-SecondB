import React from "react";
import { TimeCountData } from "../constants";
import Headings from "./Headings";
import Button from "./Button";
const BestOfferCarosel = ({
  advert,
  price,
  Details,
  time,
  category,
  image,
}) => {
  return (
    <div className="flex justify-around items-center flex-col common-padding ">
      <Headings title="Special Offers" />
      <div className="flex w-full md:w-3/4 h-full  justify-center  items-center md:flex-row flex-col gap-0 md:gap-4 mt-12">
        <div className=" md:w-2/4  h-full   ">
          <img
            src={image}
            alt="offer page"
            className="w-full  h-auto object-contain rounded-xl   "
          />
        </div>

        <div className="   md:w-2/4 w-full  ">
          <div className=" h-full w-full px-4 ">
            <h2 className="  text-black  text-2xl md:text-3xl  uppercase ">
              {advert}{" "}
            </h2>
            <h2 className="text-black  capitalize font-normal">
              best price:{" "}
              <span className="text-green-500 font-thin"> {price}</span>
            </h2>
            <div className="flex items-center  justify-between gap-4">
              {TimeCountData.map((time, i) => {
                return (
                  <div className="w-full h-auto  items-center py-4  " key={i}>
                    <div className="flex text-white text-xl rounded-xl flex-col items-center border border-green-600 justify-center">
                      <h1 className="text-black text-xl ">{time.time}</h1>
                      <h1 className="text-green-300 text-sm">
                        {time.category}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-black  text-base md:text-xl  capitalize ">
              {Details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOfferCarosel;