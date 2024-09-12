import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BlogsDetails from "../components/BlogsDetails";

const Blogpage = () => {
  const { BlogData } = useContext(ShopContext);
  const { blogId } = useParams();
  const [blogDetails, setBlogDetail] = useState([]);

  const getBlogDetails = () => {
    let details = BlogData.filter((item) => item.id === blogId);
    setBlogDetail(details);
  };

  useEffect(() => {
    getBlogDetails();
  }, []);
  return (
    <div className="bg-white ">
      {blogDetails.map((e, i) => {
        return (
          <BlogsDetails
            key={i}
            Date={e.created_at}
            title={e.title}
            image={e.image}
            subTitle={e.subtitle}
            mainContent={e.main_content}
            summary={e.summary}
          />
        );
      })}
    </div>
  );
};

export default Blogpage;
