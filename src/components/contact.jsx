import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-white h-full md:h-[600px] common-padding">
      <div className="flex w-full items-center justify-center  px-2 md:px-6 py-4">
        <div className=" w-full md:w-3/4">
          <form className="w-full" action="">
            <h1 className="text-center text-black uppercase text-base font-normal tracking-wider">
              <span className="text-green-400">special offer</span> for
              subscribers
            </h1>
            <h1 className="uppercase text-2xl text-black py-2 text-center ">
              new offers + best prices
            </h1>
            <p className="text-center text-base text-black py-2">
              Subscribe to our Newsletters and Solar manuals
            </p>
            <div className="flex justify-center items-center gap-0 py-4">
              <input
                type="email"
                required
                className="w-3/4 bg-gray-300 font-bold capitalize rounded-lg px-6 py-4"
                placeholder="Enter your Email "
              />
              <button className="text-center font-bold px-4 py-4 -ml-3 text-black bg-green-400 rounded-lg capitalize">
                submit
              </button>
            </div>
          </form>

          <div>
            <div>
              <h2 className="text-2xl">Call</h2>
              <h3 className="text-xl font-bold">Office Line</h3>
              <h3 className="text-xl font-bold">Whatsapp</h3>
              <h3 className="text-xl font-bold ">Email:</h3>
            </div>

            <div className="py-3">
              <h2>Offices Address</h2>
              <p className="text-black text-xl py-1 leading-normal">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat, eum Lorem ipsum dolor sit amet consectetur..
              </p>

              <p className="text-black text-xl py-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat, eum Lorem ipsum dolor sit amet consectetur..
              </p>

              <p className="text-black text-xl py-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat, eum Lorem ipsum dolor sit amet consectetur..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
