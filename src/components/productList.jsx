import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Products from "./newProductsItem";
import ViewAll from "./viewAll";

const ProductList = () => {
  const { ProductData } = useContext(ShopContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(ProductData.slice(0, 6));
  }, []);
  return (
    <div className="w-full h-full flex items-center justify-center  bg-white py-6">
      <div className="  grid grid-cols-2 md:grid-cols-6 w-full md:w-3/4 ">
        {list.map((each, index) => {
          return (
            <Products
              key={index}
              category={each.category}
              image={each.imgs}
              productId={each.id}
              brand={each.Brand}
              price={each.price}
              title={each.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
