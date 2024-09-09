import React from "react";

const Projects = ({ image, title, details }) => {
  return (
    <div className="p-2 md:p-4">
      <div className="w-full h-[500px]  bg-black relative border rounded-xl border-red-500 flex flex-col items-center justify-center">
        <div className="absolute  top-0 right-0 w-full h-full border rounded-xl border-green-400">
          <img
            src={image}
            alt=""
            className="object-top w-full h-full opacity-50 rounded-xl
          "
          />
        </div>

        <h2 className="p-4 text-center text-white text-2xl">{title}</h2>
        <p className="text-center px-4 text-xl text-white">{details}</p>
      </div>
    </div>
  );
};

export default Projects;
