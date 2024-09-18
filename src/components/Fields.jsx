import React, { useContext, useEffect, useState } from "react";
import BlogsItems from "./BlogsItems";
import { ShopContext } from "../Context/ShopContext";
const Fields = () => {
  const { BlogData } = useContext(ShopContext);
  const [blog, setBlog] = useState([]);

  const fetchBlog = () => {
    setBlog(BlogData.slice(0, 4));
    console.log(blog);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <section className="pt-16  px-2 md:px-8 bg-white">
      <div className="w-full grid md:grid-cols-4 py-2 px-3 place-items-center gap-6 grid-cols-1">
        {blog &&
          blog.map((item, index) => {
            return (
              <div className="w-full flex items-center  md:h-[300px] h-[500px] ">
                <div className="flex justify-center items-center w-full ">
                  <div className=" w-full px-6">
                    <BlogsItems
                      key={index}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      subTitle={item.subtitle}
                    />
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export default Fields;
