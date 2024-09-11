import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-white h-full md:h-[300px] common-padding">
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
        
        </div>
      </div>
    </div>
  );
  
};

export default Contact;
