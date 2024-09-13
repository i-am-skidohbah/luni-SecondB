import React from "react";

const Headings = ({ tips, title }) => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col  bg-white">
        <h2 className="text-black text-xl  font-bold text-center uppercase ">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Headings;
