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
    <div className="md:pt-1 md:pb-10 md:px-12 py-10 px-5  bg-white">
      <div className="grid md:grid-cols-4 py-2 px-3 place-items-center gap-2 grid-cols-1">
        {blog &&
          blog.map((item, index) => {
            return (
              <BlogsItems
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                subTitle={item.subtitle}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Fields;
