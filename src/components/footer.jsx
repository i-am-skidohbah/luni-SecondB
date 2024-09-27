import React from "react";
import logo from "../Assests/luni_logo_124503.png";
import logo1 from "../Assests/facebook.png";
import logo2 from "../Assests/whatsapp.png";
import logo3 from "../Assests/instagram.png";
import logo4 from "../Assests/youtube.png";
const Footer = () => {
  return (
    <div className="w-full flex flex-col p-5  h-full items-center justify-center border  md:h-[310px] bg_footer">
      <section>
        <div className=" flex justify-start    gap-10 w-4/4">
          <div className="px-4 py-4 w-4/4">
            <div className="flex items-center w-full justify-center md:flex-row flex-col">
              <img
                src={logo}
                className="w-20  h-20 object-contain px-3"
                alt=""
              />
              <h2 className="text-white capitalize">
                lightup Nigeria Solar Power Ltd
              </h2>
            </div>
          </div>
          
          <div className="flex  flex-col px-6 py-4  w-2/4  ">
            <div className="w-2/4 flex justify-start items-center  gap-6 ">
              <img src={logo1} className="md:w-8 w-4 h-4 md:h-8 " alt="" />
              <img src={logo2} className="md:w-8 w-4 h-4 md:h-8" alt="" />
              <img src={logo3} className="md:w-8 w-4 h-4 md:h-8 " alt="" />
              <img
                src={logo4}
                className="md:w-8 w-4 h-4 md:h-8 "
                alt=""
              />
            </div>

            <div>
              <h2 className="text-white text-bold capitalize md:text-lg text-sm py-2">
                important Links
              </h2>
              <p className="md:text-xl text-xs leading-normal capitalize ">
                home
              </p>
              <p className="md:text-xl text-xs leading-normal capitalize">
                product
              </p>
              <p className="md:text-xl text-xs leading-normal capitalize ">
                projects
              </p>
              <p className="md:text-xl text-xs leading-normal capitalize ">
                training
              </p>
              <p className="md:text-xl text-xs leading-normal capitalize ">
                About Us
              </p>
              <p className="md:text-xl text-xs leading-normal capitalize ">
                contact Us
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <p className="font-extralight text-center italic text-white">
          All Right Reserved, Lightup Nigeria Solar Power Ltd © 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
