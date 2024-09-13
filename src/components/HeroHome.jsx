import React from "react";
import Headings from "./Headings";
import { Link } from "react-router-dom";
const HeroHome = () => {
  return (
    <section className="pt-16  px-2 md:px-8 bg-white">
      <Headings title="Our Projects" />
      <div className=" w-full grid grid-cols-1 md:grid-cols-3 justify-center pt-8 gap-6">
        <div className="w-full flex items-center  h-[300px] banner ">
          <div className="flex justify-center items-center w-full ">
            <div className=" w-full px-6">
              <h3 className="  text-sm text-white uppercase py-2">
                worry less satisfaction
              </h3>
              <h2 className="  text-xl  capitalize text-white">
                Hon. Justice Nnodum's House
              </h2>

              <div className=" w-3/4 ">
                <p className="text-base text-justify  leading-normal">
                  5KVA inverter system on a 5Kwh lithium iron Phosphate
                  (LiFePO4) backup This module is an all-in-one solar module
                  that is scalable (upgradable) with sleek design.
                </p>
              </div>
              <div className=" w-full py-4 ">
                <Link to="/projects">
                  <button className="text-center md:w-44 p-2 px-4 font-bold bg-white rounded-lg text-black text-xl capitalize">
                    {" "}
                    learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* the second banner */}

        <div className="w-full flex items-center  h-[300px] banner2 ">
          <div className="flex justify-center items-center w-ful">
            <div className=" w-full px-6">
              <h3 className="  text-base text-white uppercase py-2">
                worry less satisfaction
              </h3>
              <h2 className="  text-xl  capitalize text-white">
                And the dead finally found a home to rest in peace
              </h2>

              <div className="w-3/4 ">
                <p className="text-base text-justify  leading-normal">
                  We are proud to have since completed the 25kwh Alaoma solar
                  module at Peace College Junction, Alaoma Estate, off, KM5 Port
                  Harcourt Rd, New Owerri, Owerri.
                </p>
              </div>
              <div className=" w-full py-4 ">
                <Link to="/projects">
                  <button className="text-center md:w-44 p-2 px-4 font-bold bg-white rounded-lg text-black text-xl capitalize">
                    {" "}
                    learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center  h-[300px] banner2 ">
          <div className="flex justify-center items-center w-full">
            <div className=" w-full px-6">
              <h3 className="  text-base text-white uppercase">
                worry less satisfaction
              </h3>
              <h2 className="  text-2xl  capitalize text-white">
                And the dead finally found a home to rest in peace
              </h2>

              <div className="w-3/4 ">
                <p className="text-base text-justify  leading-normal">
                  We are proud to have since completed the 25kwh Alaoma solar
                  module at Peace College Junction, Alaoma Estate, off, KM5 Port
                  Harcourt Rd, New Owerri, Owerri.
                </p>
              </div>
              <div className=" w-full py-4 ">
                <Link to="/projects">
                  <button className="text-center md:w-44 p-2 px-4 font-bold bg-white rounded-lg text-black text-xl capitalize">
                    {" "}
                    learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
