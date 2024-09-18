import Button from "../components/Button";

const HeroCarousel = ({ title1, title2, details, price, qualities, image }) => {
  return (
    <div className="w-full hero-container  h-full ">
      <div className="w-full md:h-[400px]  hero flex-container  common-padding px-4 md:px-44 ">
        <div className=" w-2/4 py-2 ">
          <h2 className="  md:text-xl text-sm uppercase text-black-600">
            {title1}
          </h2>
          <h1 className="md:text-3xl text-xl text-red-600 capitalize">
            {title2}
          </h1>
          <div className=" ">
            <p className=" md:text-xl  text-sm capitalize leading-normal py-1">
              {details}
            </p>
            {qualities.map((e, index) => {
              return (
                <p key={index} className="md:text-xl  text-sm leading-normal">
                  {e}
                </p>
              );
            })}
          </div>

          <div className="flex justify-start md:items-center w-full  md:flex-row flex-col">
            <div className="w-2/4  ">
              <h3 className="text-white text-sm md:text-xl py-1 ">
                {price}
              </h3>
            </div>

            <div className="flex w-3/4 md;w-2/4  gap-4">
              <Button />
            </div>
          </div>
        </div>
        <div className=" w-2/4 flex items-center  justify-center">
          <div className="w-full h-[80%]">
            <img src={image} alt="placeholder" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
