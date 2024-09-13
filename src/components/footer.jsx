import React from "react";
import logo from "../Assests/luni_logo_124503.png";
import logo1 from "../Assests/facebook.png";
import logo2 from "../Assests/whatsapp.png";
import logo3 from "../Assests/instagram.png";
import logo4 from "../Assests/youtube.png";
const Footer = () => {
  return (
    <div className="w-full flex  h-full  md:h-[500px] bg_footer">
      <div className="w-full flex justify-between  items-center ">
        <div className="px-4 py-4 w-2/4">
          <div className="flex items-center w-full justify-center ">
            <img src={logo} className="w-20  h-20 object-contain px-3" alt="" />
            <h2 className="text-white capitalize">
              lightup Nigeria Solar Power Ltd
            </h2>
          </div>
          <div>
            <p className="font-extralight text-center italic text-white">
              All Right Reserved, Lightup Nigeria Solar Power Ltd © 2024
            </p>
          </div>
        </div>

        <div className="flex  flex-col px-60 py-4  w-2/4 ">
          <div className="w-2/4 flex justify-start items-center gap-6 py-5">
            <img src={logo1} className="w-8 h-8" alt="" />
            <img src={logo2} className="w-8 h-8" alt="" />
            <img src={logo3} className="w-8 h-8 " alt="" />
            <img src={logo4} className="w-8 h-8  rounded-full" alt="" />
          </div>

          <div>
            <h2 className="text-white text-bold capitalize text-1xl py-2">
              important Links
            </h2>
            <p className="text-xl leading-normal capitalize">product</p>
            <p className="text-xl leading-normal capitalize ">home</p>
            <p className="text-xl leading-normal capitalize ">about</p>
            <p className="text-xl leading-normal capitalize ">carts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
