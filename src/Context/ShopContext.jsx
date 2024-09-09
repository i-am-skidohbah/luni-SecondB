import { createContext, useEffect, useReducer, useState } from "react";
import {
  ProductData,
  productCarousel,
  BestOffer,
  BannerData,
  projectsData,
} from "../constants";
// import CartReducer from "./CartReducer";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const deliveryFee = "$10";
  // const [cart, dispatch] = useReducer(CartReducer, []);

  const value = {
    ProductData,
    deliveryFee,
    productCarousel,
    BestOffer,
    projectsData,
    BannerData,
    // dispatch,
    // cart,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
