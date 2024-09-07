import React from "react";
import { useNavigate } from "react-router-dom";
const ViewAll = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center bg-white justify-center  py-5 ">
      <button
        onClick={() => navigate("/products")}
        className="text-center text-2xl px-6 py-4 text-bold rounded-full text-white bg-green-600"
      >
        View All product
      </button>
    </div>
  );
};

export default ViewAll;
