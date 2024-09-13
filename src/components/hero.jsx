import React from "react";
import { ShopContext } from "../Context/ShopContext";
import HomeAbout from "./HomeAbout";
import Slider from "react-slick";
import HeroHome from "./HeroHome";
import Headings from "./Headings";
import BestOffer from "./BestOffer";

import HeroCarousel from "./heroCarousel";
import Banner from "./Banner";
import { useContext, useEffect } from "react";

import { useState, useRef } from "react";

import ProductList from "./productList";

import Fields from "./Fields";
import Contact from "./contact";
import { Brands } from "./HomeAbout";

const Hero = () => {
  const { productCarousel } = useContext(ShopContext);

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const [caroData, setCaroData] = useState([]);

  useEffect(() => {
    setCaroData(productCarousel.slice(0, 2));
  }, []);

  // slider using third party Api
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  //
  return (
    <section className="z-0  px-0 md:px-12">
    
      < HomeAbout />

      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {caroData.map((i, index) => {
          return (
            <HeroCarousel
              key={index}
              title1={i.title1}
              title2={i.title2}
              details={i.details}
              price={i.price}
              image={i.image}
              qualities={i.qualities}
            />
          );
        })}
      </Slider>
      <HeroHome />

      <BestOffer />
      <Headings tips="" title="OUR PRODUCTS" />
      <ProductList />
      {/*<Banner /> */}
      <Fields />
      <Contact />
      <Brands/>
    </section>
  );
};

export default Hero;
