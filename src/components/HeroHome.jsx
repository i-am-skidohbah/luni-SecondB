import React from "react";
import Headings from "./Headings";
import { Link } from "react-router-dom";
const HeroHome = () => {
  return (
    <section className="pt-16  px-2 md:px-8 bg-white">
      <Headings title="Our Projects" />
      <div className="flex w-full  flex-col md:flex-row justify-center pt-8 gap-6">
        <div className="w-full flex items-center  h-[500px] banner ">
          <div className="flex justify-center items-center w-full ">
            <div className=" w-full px-6">
              <h3 className="  text-base text-white uppercase">
                worry less satisfaction
              </h3>
              <h2 className="  text-4xl  capitalize text-white">
                your power House
              </h2>

              <div className=" w-full  md:w-3/4 ">
                <p className="text-base text-justify  leading-normal">
                  5KVA inverter system on a 5Kwh lithium iron Phosphate
                  (LiFePO4) backup
                </p>
              </div>
              <div className=" w-full py-6 ">
                <Link to="/projects">
                  <button className="text-center md:w-44 w-full p-4 px-6 font-bold bg-white rounded-lg text-black text-xl capitalize">
                    {" "}
                    learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* the second banner */}

        <div className="w-full flex items-center  h-[500px] banner2 ">
          <div className="flex justify-center items-center w-ful">
            <div className=" w-full px-6">
              <h3 className="  text-base text-white uppercase">
                worry less satisfaction
              </h3>
              <h2 className="  text-4xl  capitalize text-white">
              And the dead finally found a home to rest in peace
              </h2>

              <div className=" w-full  md:w-3/4 ">
                <p className="text-base text-justify  leading-normal">
                We are proud to have since completed  the 25kwh Alaoma solar module at Peace College Junction, Alaoma Estate, off, KM5 Port Harcourt Rd, New Owerri, Owerri.
                </p>
              </div>
              <div className=" w-full py-4 ">
                <Link to="/projects">
                  <button className="text-center md:w-44 w-full p-4 px-6 font-bold bg-white rounded-lg text-black text-xl capitalize">
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