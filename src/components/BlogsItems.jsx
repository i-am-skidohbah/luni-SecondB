    import React from "react";

    import { useNavigate } from "react-router-dom";
    import { Link } from "react-router-dom";
    const BlogsItems = ({ title, subTitle, image, id }) => {
      const navigate = useNavigate();
      return (
        <Link to={`blogs/${id}`}>
          <div className="md:px-4 px-1">
            <div className="w-full h-full min-h-[500px] px-2">
              <div className="w-full h-full">
                <img
                  src={image}
                  className="w-full  h-[300px] object-fill "
                  alt=""
                />
              </div>
              <div className=" ">
                <h1 className=" text-base  py-1 text-red-600 capitalize font-bold">
                  Breaking News
                </h1>
                <h1 className="text-1xl  text-black py-1 uppercase font-bold">
                  {title}
                </h1>
                <p className="text-sm py-2 text-black  font-normal capitalize">
                  {subTitle}
                </p>{" "}
                <button className="text-center text-sm font-bold capitalize text-black underline  rounded-lg">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </Link>
      );
    };

    export default BlogsItems;
