import { createContext, useEffect, useReducer, useState } from "react";
import {
  ProductData,
  productCarousel,
  BestOffer,
  BannerData,
  projectsData,
  BlogData,
} from "../constants";
import CartReducer from "./CartReducer";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const deliveryFee = "$10";
  const [search, Setsearch] = useState("");
  const [cart, dispatch] = useReducer(CartReducer, []);

  const value = {
    ProductData,
    deliveryFee,
    productCarousel,
    BestOffer,
    projectsData,
    BannerData,
    search,
    Setsearch,
    dispatch,
    cart,
    BlogData,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
