import React from "react";
import pannel from "../Assests/panel.jpg";
import solar from "../Assests/projects/morgue.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headings from "./Headings";
import { Brand } from "../constants";

// our teams images
import image1 from "../Assests/team-1.jpg";
import image2 from "../Assests/team-2.jpg";
import image3 from "../Assests/team4.jpg";
import image4 from "../Assests/team3.jpg";
import image5 from "../Assests/team-5.jpg";
import image6 from "../Assests/thei.jpg";
import image7 from "../Assests/engr.jpg";
import image8 from "../Assests/ALLWELL.jpg";
import image9 from "../Assests/Ejike-director111.jpg";
import image10 from "../Assests/mrs-adanna-director.jpg";
import image11 from "../Assests/Capture.jpg";
import image12 from "../Assests/anne.jpg";

const AboutPageCaro = () => {
  return (
    <div className="w-full h-[650px]   relative">
      <div className="w-full  h-full sticky">
        <img
          src={pannel}
          className="w-full h-full object-fill opacity-100"
          alt=""
        />
      </div>
      <div className="absolute top-36 left-0 right-0 bottom-0">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-center text-white py-4 text-6xl uppercase">
            LIGHTUP NIGERIA
          </h1>
          <hr className="w-32 bg-white h-1" />
          <p className="text-center text-white text-2xl py-4">
            Welcome to Our World of Solar Power Excellence!
          </p>
        </div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <section className=" common-padding md:px-44 px-4 flex justify-center items-center bg-white ">
      <div className="flex items-center md:flex-row  flex-col gap-8 md:w-3/4 justify-center w-full">
        <div className=" w-full md:w-2/4">
          <h1 className="text-balance text-base text-justify ">About us</h1>
          <h1 className="text-black text-5xl py-2 font-bold">Sun Power</h1>
          <hr className="w-24" />
          <p className="text-justify text-black  text-xl">
            Lightup Nigeria Solar Power Ltd was incorporated in August 2020 with
            Corporate Affairs Commission under the Company and Allied Masters
            Act Laws of the Federation of Nigeria with RC No: 1700859.
          </p>
        </div>

        <div className=" w-full md:w-2/4 ">
          <p className=" text-justify text-black text-xl py-2">
            We offer innovative, afforable, and sustainable solar energy
            solutions to power homes and businesses across Nigeria, reducing
            energy costs and promoting environmental responsibility with the use
            of lithium phosphate technology
          </p>
        </div>
      </div>
    </section>
  );
};

export const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white common-padding">
      <div className="flex items-center md:flex-row flex-col justify-center px-4 gap-4  py-6">
        <div className=" w-full md:w-1/4">
          <div className="w-full">
            <img src={solar} className="w-full rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="text-center py-2 text-2xl">Installation</h1>
            <p className="text-center text-black text-xl text-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto in
              cum ducimus fugiat magnam.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-1/4">
          <div className="w-full">
            <img src={solar} className="w-full rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="text-center py-2 text-2xl">Vendor</h1>
            <p className="text-center text-black text-xl text-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto in
              cum ducimus fugiat magnam.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-1/4">
          <div className="w-full">
            <img src={solar} className="w-full rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="text-center  py-2 text-2xl">Fixing</h1>
            <p className="text-center text-black text-xl text-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto in
              cum ducimus fugiat magnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Team = () => {
  return (
    <div className="bg-white common-padding  p-4 md:px-44">
      <div className=" grid grid-cols-1 place-items-center gap-4 w-full justify-center md:grid-cols-4 ">
        <div className="w-full h-[400px]  ">
          <div className=" w-full h-[65%]">
            <img src={image1} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-full h-[400px]">
          <div className=" w-full h-[65%] bg-green-300">
            <img src={image2} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]  ">
          <div className=" w-full h-[65%] bg-green-300">
            <img src={image3} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] ">
          <div className=" w-full h-[65%]">
            <img src={image4} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] ">
          <div className=" w-full h-[65%] bg-green-300">
            <img src={image5} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]  ">
          <div className=" w-full h-[65%] bg-green-300">
            <img src={image6} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] ">
          <div className=" w-full h-[65%] ">
            <img src={image7} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] ">
          <div className=" w-full h-[65%] ">
            <img src={image8} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] ">
          <div className=" w-full h-[65%] ">
            <img src={image9} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]">
          <div className=" w-full h-[65%] bg-green-300">
            <img src={image10} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]  ">
          <div className=" w-full h-[65%] bg-green-300">
            <img src={image11} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]  ">
          <div className=" w-full h-[65%] bg-green-300">
            <img src={image12} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              co founder
            </h1>
            <h1 className="text-2xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-xl font-normal tracking-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Brands = () => {
  return (
    <section className="common-padding md:block hidden bg-white  w-full ">
      {" "}
      <Headings tips="our brands" title="best of the bests" />
      <div className="bg-white w-full flex justify-center common-padding items-center ">
        <div className=" w-3/4 md:grid hidden gap-6 place-items-center justify-center md:grid-cols-6">
          {Brand.map((e, i) => {
            return (
              <div key={i} className="w-full">
                <img src={e} alt="" className="w-32" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutPageCaro;
