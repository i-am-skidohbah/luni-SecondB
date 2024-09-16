import React from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const BlogsItems = ({ title, subTitle, image, id }) => {
  const navigate = useNavigate();
  const trucateSubtitle = (text) => {
    if (text.length >= 23) {
      return text.slice(0, 30) + `...`;
    } else {
      return text;
    }
  };
  return (
    /* <Link to={`blogs/${id}`}>*/
    <div className="md:px-4 px-1">
      <div className="w-[300px] h-[325px]   md:py-0 py-8">
        <div className="w-full h-2/4">
          <img src={image} className="w-full  h-full object-fill " alt="" />
        </div>
        <div className=" w-full h-2/4 p-2 ">
          <h1 className=" text-base  py-1 text-red-600 capitalize font-bold">
            Breaking News
          </h1>
          <h1 className="text-1xl  text-black py-1 uppercase font-bold">
            {title}
          </h1>
          <p className="text-sm py-2 text-black  font-normal capitalize">
            {trucateSubtitle(subTitle)}
          </p>{" "}
          <button className="text-center text-sm font-bold capitalize text-black underline  rounded-lg">
            Read more
          </button>
        </div>
      </div>
    </div>
    /* </Link>*/
  );
};

export default BlogsItems;
