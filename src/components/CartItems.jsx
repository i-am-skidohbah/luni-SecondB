import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import { totalItem, totalPrice } from "../Context/CartReducer";

const CartItems = ({ cardData }) => {
  const { cart, dispatch } = useContext(ShopContext);
  const Increasement = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const Decreasement = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };
  console.log(cardData);
  return (
    <div className=" w-full flex items-start ">
      <div className="flex md:flex-row  flex-col justify-center w-full  border gap-4">
        <section className="md:w-2/4">
          {cardData &&
            cardData.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-center md:flex-row flex-col gap-6 border w-full items-center"
                >
                  <img src={e.imgs[0]} alt="" className="w-28 h-28" />
                  <div className="  w-2/4 relative">
                    <h2 className="text-black">{e.Brand}</h2>
                    <p className="text-black text-2xl font-normal">{e.price}</p>
                    <p className="text-sm leading-normal text-black">
                      {e.title}
                    </p>
                    <div className="flex justify-center items-center gap-3 border my-2 ">
                      <button
                        onClick={() => Increasement(e.id)}
                        className="border w-full bg-gray-700 text-white px-2 py-2"
                      >
                        <b>+</b>
                      </button>
                      <h3 className="text-2xl px-4">{e.quantity}</h3>
                      <button
                        onClick={() => Decreasement(e.id)}
                        className="border w-full bg-gray-700 text-white px-2 py-2"
                      >
                        <b>-</b>
                      </button>
                    </div>
                    <div className="absolute top-4 -right-5">
                      <button
                        onClick={() => dispatch({ type: "Remove", id: e.id })}
                        className="bg-transparent font-bold text-xl cursor-pointer"
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
        {cardData.length > 0 ? (
          <div className="w3/4 px-4 py-4 h-full flex items-center justify-center ">
            <div>
              <h2 className="py-2 text-2xl  text-center capitalize">
                Order Summary
              </h2>
              <h2 className="text-xl font-normal py-1">
                {" "}
                Total Items : <span>{totalItem(cart)}</span>
              </h2>
              <h2 className="text-xl font-normal py-1">
                sub Total : <span className="px-4">{totalPrice(cart)}</span>
              </h2>
              <div>
                <h2 className="text-xl font-normal py-1">
                  Shipping :<span className="px-4"> 0.00</span>
                </h2>
                <p className="text-xl font-normal py-1">free shipping</p>

                <h2 className="text-2xl font-semibold  capitalize py-1">
                  shipping to Imo state
                </h2>
              </div>
              <h2 className="text-2xl  py-1">
                Total Price : <span className="px-4"> {totalPrice(cart)}</span>
              </h2>

              <div className="py-3">
                <Link to="/checkout">
                  <button className="w-full bg-gray-700 px-4 py-2 text-xl text-white rounded-lg">
                    proceed to Payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartItems;
