import React from "react";

const Buttons = () => {
  return (
    <div>
      <div className="flex w-full flex-col justify-center gap-1 items-center mt-4">
        <button className="px-2 py-2 text-center text-white text-1xl rounded-xl bg-green-500">
          Add to Cart
        </button>
        <button className="px-2 py-2 text-center text-1xl text-white rounded-xl bg-black">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Buttons;
