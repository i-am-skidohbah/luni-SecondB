import { Link } from "react-router-dom";
import Buttons from "./Buttons";

const Products = ({ image, brand, category, title, price, productId }) => {
  const truncateBrand = (title) => {
    if (title.length >= 10) {
      return title.slice(0, 15) + ` ...`;
    }
  };

  const truncateTitle = (title) => {
    if (title.length >= 20) {
      return title.slice(0, 14) + ` ...`;
    } else {
      return title;
    }
  };
  return (
    <Link to={`/products/${productId}`}>
      <div className="w-[150px] relative  h-[300px] mx-4  ">
        <div className="w-full py-1 h-2/4 flex items-center justify-center">
          <img
            src={image && image[0]}
            alt=""
            className="w-full h-full object-fill "
          />
          <div className="group-hover:flex flex-col  items-center hidden justify-center absolute top-0 bottom-10">
            <Buttons />
          </div>
        </div>

        <div className="w-full h-2/4 ">
          <h1 className="text-orange-300  capitalize text-xs ">
            {truncateBrand(brand)}
          </h1>
          <h3 className="text-black text-lg font-semibold group-hover:duration-75 group-hover:text-green-400">
            {truncateTitle(category)}
          </h3>

          <div className="py-1 relative">
            <p className="text-sm  text-black font-normal">
              {truncateTitle(title)}
            </p>
          </div>
          <p className="text-black text-xl font-semibold">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Products;
