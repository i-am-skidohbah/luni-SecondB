import React from "react";
import bg from "../Assests/solar 4.jpg";
import { useState } from "react";

const Traning = () => {
  const [status, setStatus] = useState(true);
  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <section className="px-0 md:px-12 w-full h-screen  border bg-white">
      <div className=" w-full h-[800px] ">
        <div className="bg-white w-full h-full py-8 flex justify-center flex-col items-center">
          <div className="py-5 px-3 my-5">
            <h2 className="md:text-4xl text-2xl italic text-center text-black uppercase leading-normal">
              become a certified solar technician and solarpreneur
            </h2>
          </div>
          <div className="w-[80%] h-[80%] border rounded-lg flex ">
            <div className="w-2/4 h-full hidden relative rounded-l-xl bg-green-600 border  md:flex justify-center items-center">
              <div className="w-full h-full absolute top-0 right-0 ">
                <img
                  src={bg}
                  className="object-top w-full h-full   opacity-15"
                  alt=""
                />
              </div>

              <h1 className="text-center text-white capitalize  text-5xl">
                LIght Up Nigeria
              </h1>
            </div>

            {status ? (
              <div className=" w-full md:w-2/4 h-full flex items-center justify-center ">
                <div className="w-[70%] h-[70%]  ">
                  <form action="">
                    <div className="py-6">
                      <input
                        type="text"
                        placeholder="UserName"
                        className="py-2 border-b-4 outline-0  border-green-600 w-full"
                      />
                    </div>
                    <div className="py-6">
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        className="py-2 border-b-4 outline-0 border-green-600 w-full"
                      />
                    </div>
                    <div className=" py-6 ">
                      <div className="flex gap-4 mb-4">
                        <p className="text-black text-xl m-0 py-1">
                          Remember Me
                        </p>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-8 h-8"
                        />
                      </div>
                      <button
                        onClick={() => handleClick()}
                        className="underline text-red-500"
                      >
                        Create an Account
                      </button>
                    </div>
                    <div className="w-full h-32 py-6">
                      <button className="w-full border-0  bg-green-600 py-4 rounded-lg text-white text-xl font-bold">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className=" w-full md:w-2/4 h-full flex items-center justify-center py-0 md:py-6 ">
                <div className="w-[70%] h-full  ">
                  <form action="">
                    <div className="py-3">
                      <input
                        type="text"
                        placeholder="FirstName"
                        className="py-2 border-b-4 outline-0  border-green-600 w-full"
                      />
                    </div>

                    <div className="py-3">
                      <input
                        type="text"
                        placeholder="LastName"
                        className="py-2 border-b-4 outline-0  border-green-600 w-full"
                      />
                    </div>

                    <div className="py-3">
                      <input
                        type="Email"
                        placeholder="Email Adress"
                        className="py-2 border-b-4 outline-0  border-green-600 w-full"
                      />
                    </div>
                    <div className="py-3">
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        className="py-2 border-b-4 outline-0 border-green-600 w-full"
                      />
                    </div>

                    <div className="py-3">
                      <input
                        type="password"
                        required
                        placeholder=" Confirm Password"
                        className="py-2 border-b-4 outline-0 border-green-600 w-full"
                      />
                    </div>

                    <div className=" py-3 ">
                      <div className="flex gap-4 mb-4">
                        <p className="text-black text-xl m-0 py-1">
                          Remember Me
                        </p>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-6 h-6 bg-green-500"
                        />
                      </div>
                      <button
                        onClick={() => handleClick()}
                        className="underline text-red-500"
                      >
                        Already have Account login
                      </button>
                    </div>
                    <div className="w-full h-32 py-6">
                      <button className="w-full border-0  bg-green-600 py-4 rounded-lg text-white text-xl font-bold">
                        Sign UP
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traning;
