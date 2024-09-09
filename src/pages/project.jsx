import React, { useContext, useEffect, useState } from "react";
import Projects from "../components/projects";
import Headings from "../components/Headings";
import { ShopContext } from "../Context/ShopContext";

const Project = () => {
  const { projectsData } = useContext(ShopContext);

  const [filter, setFilter] = useState([]);
  const [ALlproject, setAllproject] = useState(false);

  const toggleProject = () => {
    setAllproject(!ALlproject);
  };
  const showAll = () => {
    if (ALlproject) {
      setFilter(projectsData);
    } else {
      setFilter(projectsData.slice(0, 6));
    }
  };
  useEffect(() => {
    showAll();
  }, [ALlproject]);
  return (
    <div className="md:px-12 p-0 w-full h-full">
      <div className="w-full h-full bg-white py-10 ">
        <Headings title={`Recent Projects`} />
        <div className="w-full h-full bg-white py-4 px-8 grid md:grid-cols-3 grid-cols-1 place-items-center justify-center">
          {filter.map((e, i) => {
            return (
              <Projects
                key={i}
                title={e.title}
                image={e.image}
                details={e.details}
              />
            );
          })}
        </div>
        <div className="p-4 flex justify-center items-center w-full">
          <button
            className="bg-green-700 text-white py-4 px-5 rounded-lg text-xl"
            onClick={() => setAllproject(!ALlproject)}
          >
            {ALlproject ? "Hide" : " show All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
