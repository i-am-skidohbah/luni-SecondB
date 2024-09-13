import React from "react";
import { Link } from "react-router-dom";
const Button = ({ path }) => {
  return (
    <div className="flex items-center flex-row justify-center:w-[130px] my-2 ">
      <button className="text-center w-full text-base capitalize p-2 text-black bg-white font-bold rounded-lg">
        learn more
      </button>
    </div>
  );
};

export default Button;
