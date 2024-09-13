import React from "react";
import pannel from "../Assests/panel.jpg";
import solar from "../Assests/projects/morgue.jpg";
import training from "../Assests/projects/promo1.jpg";
import product from "../Assests/projects/products.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headings from "./Headings";
import { Brand } from "../constants";

// our teams images
import image1 from "../Assests/grandpatron-LUNI.jpg";
import image2 from "../Assests/team-1.jpg";
import image3 from "../Assests/team-2.jpg";
import image4 from "../Assests/team4.jpg";
import image5 from "../Assests/team-5.jpg";
import image6 from "../Assests/thei.jpg";
import image7 from "../Assests/engr.jpg";
import image8 from "../Assests/ALLWELL.jpg";
import image9 from "../Assests/Ejike-director111.jpg";
import image10 from "../Assests/mrs-adanna-director.jpg";
import image11 from "../Assests/Capture.jpg";
import image12 from "../Assests/anne.jpg";

const HomeAbout = () => {
  return (
    <div className="w-full  h-[330px] my-3 relative">
      <div className="w-full  h-full sticky bg-white">
        <img
          src={pannel}
          className="w-full h-full object-cover opacity-15"
          alt=""
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-center text-green-600 py-1 text-3xl uppercase">
            LIGHTUP NIGERIA
          </h1>
          <p className="text-center text-green-500 text-xl py-1">
            Welcome to Our World of Solar Power Excellence!
          </p>

          <div className="flex items-center md:flex-row  gap-8 md:w-3/4 justify-center w-full">
            <div className="w-2/4">
              <h1 className="text-black text-3xl py-1 font-bold">About Us</h1>
              <hr className="w-24" />
              <p className="text-justify text-black  text-xs md:text-lg">
                Lightup Nigeria Solar Power Ltd was incorporated in August 2020
                with the Corporate Affairs Commission under the Company and
                Allied Masters Act Laws of the Federation of Nigeria with RC No:
                1700859.
              </p>
            </div>

            <div className=" w-2/4 ">
              <p className=" text-justify text-black text-xs md:text-lg py-1">
                We offer innovative, afforable, and sustainable solar energy
                solutions to power homes and businesses across Nigeria, reducing
                energy costs and promoting environmental responsibility with the
                use of lithium phosphate technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <>
      {" "}
      <section className=" common-padding md:px-44 px-4 flex justify-center items-center bg-white ">
        <div className="flex items-center md:flex-row  flex-col gap-8 md:w-3/4 justify-center w-full">
          <div className=" w-full md:w-2/4">
            <h1 className="text-balance text-base text-justify "></h1>
            <h1 className="text-black text-5xl py-2 font-bold">About Us</h1>
            <hr className="w-24" />
            <p className="text-justify text-black  text-xl">
              Lightup Nigeria Solar Power Ltd was incorporated in August 2020
              with the Corporate Affairs Commission under the Company and Allied
              Masters Act Laws of the Federation of Nigeria with RC No: 1700859.
            </p>
          </div>

          <div className=" w-full md:w-2/4 ">
            <p className=" text-justify text-black text-xl py-2">
              We offer innovative, afforable, and sustainable solar energy
              solutions to power homes and businesses across Nigeria, reducing
              energy costs and promoting environmental responsibility with the
              use of lithium phosphate technology
            </p>
          </div>
        </div>
      </section>
    </>
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
            <h1 className="text-center py-2 text-2xl">
              Installation & Maintainance
            </h1>
            <p className="text-center text-black text-xl text-normal">
              LightUp Nigeria offers solar panel installations to provide clean,
              renewable energy across Nigeria. We aim to brighten the country's
              future through sustainable solar solutions.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-1/4">
          <div className="w-full">
            <img src={product} className="w-full rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="text-center py-2 text-2xl">Products & Services</h1>
            <p className="text-center text-black text-xl text-normal">
              Lightup Nigeria Solar Power ltd is a leading provider of solar
              energy solutions in Nigeria. We offer a range of high-quality
              solar power products and services to meet the growing demand for
              renewable energy in the country.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-1/4">
          <div className="w-full">
            <img src={training} className="w-full rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="text-center  py-2 text-2xl">
              Training, Research & Innovation
            </h1>
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
          <div className=" w-full h-[50%]">
            <img src={image1} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Grand Patron & Corporate Adviser
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Professor Chinedu Nebo
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Former Vice Chancellor, University of Nigeria Nsukka Ex- Minister
              of Power, Federal Republic of Nigeria and current Vice Chancellor,
              University on the Niger
            </p>
          </div>
        </div>
        <div className="w-full h-[400px]">
          <div className=" w-full h-[50%] bg-green-300">
            <img src={image2} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Board Chairman
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Professor Michael Peter Okom
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Former Director of ICT, UNICAL, Current Deputy Vice Chancellor,
              University of Calabar.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]  ">
          <div className=" w-full h-[50%] bg-green-300">
            <img src={image3} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Professor Uche Mabel
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Mr HisName
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Associate Dean, Faculty of Agriculture, University of Nigeria
              Nsukka
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] ">
          <div className=" w-full h-[50%]">
            <img src={image4} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Executive Director, Business Development
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Engr Bonny Olumba
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Former Project Engineer, National Electric Power Authority (NEPA)
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]  ">
          <div className=" w-full h-[50%] bg-green-300">
            <img src={image6} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Executive Director, Research and Innovation
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Prof Theophilus Ndubuaku
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Board member, National Institute of Industrial Research( FIRO). Ex
              Board member, National Board for Technology Incubation (NBTI).
              National Secretary General, Academic Staff Union of Research
              Institutes
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] ">
          <div className=" w-full h-[50%] ">
            <img src={image7} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Technical Assistance, Maintenance and Repairs
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Engr Kelvin Inibehe Umoh,
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal"></p>
          </div>
        </div>

        <div className="w-full h-[400px] ">
          <div className=" w-full h-[50%] ">
            <img src={image8} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Director, Project implementation & documentation
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Barr Allwell Ndubuaku
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Barrister and Solicitor of the Supreme Court of Nigeria,
              environmental law and renewable energy advocate.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] ">
          <div className=" w-full h-[50%] ">
            <img src={image9} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Director
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Olumba Ejike Chinedu
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Green energy enforcement advocate and security professional.
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]">
          <div className=" w-full h-[50%] bg-green-300">
            <img src={image10} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Director
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Mrs Christiana Adanna
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Senior Admin Officer of National Roots Crop Research Institute
              Umudike
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]  ">
          <div className=" w-full h-[50%] bg-green-300">
            <img src={image11} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Company secretary / Legal Advisor
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Barr Onyete Olelewe
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Barrister and Solicitor of the Supreme Court of Nigeria
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]  ">
          <div className=" w-full h-[50%] bg-green-300">
            <img src={image12} className="w-full h-full object-top" alt="" />
          </div>
          <div className="flex flex-col w-full  items-center justify-center">
            <h1 className="text-base uppercase font-bold text-green-600  py-2">
              Sales Supervisor
            </h1>
            <h1 className="text-1xl text-center uppercase py-1 font-bold">
              Ann Chukwukadibia
            </h1>
            <p className="text-center text-black text-1xl font-normal tracking-normal">
              Former Sales Manager at Dykon Solar Solutions Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Brands = () => {
  return (
    <section className="common-padding md:block hidden bg-white w-full">
      <Headings title="our partners" />
      <div className="bg-white w-full flex justify-center common-padding items-center">
        <div className="w-11/12 md:flex hidden gap-4 justify-between items-center">
          {Brand.map((e, i) => (
            <div key={i} className="w-1/4">
              <img src={e} alt="" className="w-24 h-24 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomeAbout;
