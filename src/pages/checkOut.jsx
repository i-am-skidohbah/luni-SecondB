import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [state, setState] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");

  const handleSubmit = () => {
    if (Email.length <= 0) {
      setError("enter this field");
    } else {
      setError("");
    }

    if (address.length <= 0) {
      setError2("enter this field");
    } else {
      setError2("");
    }

    if (state.length <= 0) {
      setError3("enter this field");
    } else {
      setError3("");
      alert("I hereBy confirmed the payment Bein Compeleted");
      navigate("/sucess");
    }

    if (first.length <= 0) {
      setError4("enter this field");
    } else {
      setError4("");
    }
  };
  //   const [Email, setEmail] = useState("");
  return (
    <div className="w-full h-full    bg-white  py-4">
      <div className="w-full h-full flex flex-col items-center">
        <div className="py-4 px-2 w-full md:w-2/4">
          <h2 className="text-2xl capitalize ">Contact Information</h2>
          <p className="text-xl text-justify text-black py-2">
            we will use this email to send you details and updates about your
            order
          </p>
          <input
            type="text"
            required
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-3 border border-slate-700 w-full  text-black"
            placeholder="Email Address"
          />
          <i className="text-red-500 leading-normal">{error}</i>
          <div className="flex items-center gap-4 py-2">
            <input type="checkbox" className="w-4 h-4 " />
            <h3>i want to recieve updates about products and promotions</h3>
          </div>
        </div>

        <div className=" w-full px-2 md:w-2/4 ">
          <h2 className="text-2xl">Shipping Address</h2>
          <p className="text-xl text-justify text-black">
            Enter the Adress where you want your older Delivered
          </p>
          <div className="py-4 w-full">
            <form
              action="
            "
            >
              <div className="flex justify-between w-full gap-4">
                <input
                  required
                  type="text"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  placeholder="First Name"
                  className="w-2/4 py-2 px-2 border border-slate-700 "
                />

                <input
                  required
                  type="text"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  placeholder="Last Name"
                  className="w-2/4 py-2 px-2 border border-slate-700 "
                />
              </div>
              <i className="text-red-500 leading-normal">{error4}</i>
              <div className="w-full py-4">
                <input
                  required
                  type="text"
                  value={address}
                  onChange={(e) => setAdress(e.target.value)}
                  placeholder="Address"
                  name=""
                  id=""
                  className="w-full py-2 px-2 border border-slate-700 "
                />
                <i className="text-red-500 leading-normal">{error2}</i>
              </div>
              <div className="w-full py-4">
                <input
                  required
                  placeholder="Apartment,suit etc"
                  type="text"
                  name=""
                  id=""
                  className="w-full py-2 px-2 border border-slate-700 "
                />
              </div>
              <div className="w-full py-4">
                <input
                  value={`Nigeria`}
                  type="text"
                  name=""
                  required
                  id=""
                  className="w-full py-2 px-2 border border-slate-700 "
                />
              </div>

              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  placeholder="city"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                  className="w-2/4 py-2 px-2 border border-slate-700 "
                />

                <input
                  required
                  type="text"
                  placeholder="state"
                  className="w-2/4 py-2 px-2 border border-slate-700 "
                />
              </div>
              <i className="text-red-500 leading-normal">{error3}</i>
              <div className="w-full py-4">
                <input
                  placeholder="phone Number (optional)"
                  type="text"
                  name=""
                  id=""
                  className="w-full py-2 px-2 border border-slate-700 "
                />
              </div>
              <div className="flex  items-center w-[40%]">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-4 h-4 py-2 border border-slate-700 "
                />
                <p className="text-sm px-3 text-black">
                  use the same Address as billing
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="md:w-2/4 w-full">
          <div className="py-4  w-full ">
            <h2 className="text-2xl">Shipping Options</h2>
            <p className="text-justify text-sm text-black">free shipping</p>
          </div>

          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="text-2xl">Payment Options</h2>
            <div className="py-2 border px-2 w-full shadow-md">
              <h2>Direct Bank Transfer</h2>
              <p className="text-justify text-sm text-black capitalize py-2">
                make your payment directly into bank Account provided below,
                please use your order Id as payment reference your order will
                not be shipped untill the funds have cleared in our account
              </p>
            </div>
            <div className="w-full py-4">
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="py-3 px-3 bg-green-700 text-white rounded-lg text-xl"
              >
                payment Compeleted
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
