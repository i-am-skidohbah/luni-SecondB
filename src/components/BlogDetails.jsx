import React from "react";

const BlogsDetails = ({
  subTitle,
  title,
  image,
  summary,
  mainContent,
  Date,
}) => {
  return (
    <div className="md:px-4 w-full h-full flex items-center justify-center py-8 flex-col">
      <div className="w-full  md:w-3/4  px-4">
        <h2 className="text-3xl capitalize">{title}</h2>
        <p className="text-black italic py-1">{Date}</p>
      </div>

      <div className=" w-full  md:w-3/4 h-44 md:h-[700px] px-4">
        <img src={image} alt="" className="h-full w-full object-top p-4" />
      </div>
      <div className=" w-full md:w-3/4 h-full">
        <div className="w-full h-full px-4">
          <h2 className="text-2xl leading-normal py-2">{subTitle}</h2>
          <p className="px-4 py-1 leading-10 text-justify  text-xl text-black">
            {mainContent}
          </p>
          <div className="w-full py-2 px-2">
            <h2 className="text-2xl py-2 text-justify">Summary </h2>
            <p className="px-2 py-1 leading-10 text-justify  text-xl font-bold text-black">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
