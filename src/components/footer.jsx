import React from "react";
import logo from "../Assests/luni_logo_124503.png";
import logo1 from "../Assests/facebook.png";
import logo2 from "../Assests/whatsapp.png";
import logo3 from "../Assests/instagram.png";
import logo4 from "../Assests/youtube.png";
const Footer = () => {
  return (
    <div className="w-full flex justify-center h-full  md:h-[500px] bg_footer">
      <div className="w-4/4 grid grid-cols-1 md:grid-cols-3 h-[80%] place-items-start border-b border-green-100 py-5 px-4">
        <div className="  px-4 py-4">
          <section>
            <div className="flex items-center  ">
              <img
                src={logo}
                className="w-20  h-20 object-contain px-3"
                alt=""
              />
              <h2 className="text-white capitalize">
                lightup Nigeria Solar Power Ltd
              </h2>
            </div>
            <div>
              <p className="font-extralight text-center italic text-white">
                All Right Reserved, Lightup Nigeria Solar Power Ltd © 2024
              </p>
            </div>
          </section>
        </div>

        {/* the first */}
        <div className="flex  px-64 py-4  flex-col  ">
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
       
        <div className="flex  flex-col px-60 py-4  w-full ">
          <h2 className="text-base capitalize text-white">get in out</h2>
          <div className="w-2/4 flex justify-start items-center gap-6 py-5">
            <img src={logo1} className="w-8 h-8" alt="" />
            <img src={logo2} className="w-8 h-8" alt="" />
            <img src={logo3} className="w-8 h-8 " alt="" />
            <img src={logo4} className="w-8 h-8  rounded-full" alt="" />
          </div>
          <div className="relative">
            <input type="text" className="bg-white py-2 rounded-lg w-full" />
            <button className="text-white   px-2 py-2 text-bold ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
