import React from "react";
import { Link, Outlet } from "react-router-dom";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full max-md:pt-24 bg-gradient-to-b from-black to-gray-800  "
    >
      <div className="flex max-w-screen-lg mx-auto flex-col w-full  justify-center   text-white">
        <div className="ml-4">
          <div className="  ">
            <p className="text-4xl inline  border-b-4 border-gray-500 font-bold">
              Portfolio{" "}
            </p>
          </div>
          <p className="my-10">Check out some of my work right here</p>
        </div>
        <div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 sm:mx-4 mx-16  ">
            {portfolios.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col shadow-gray-600 mb-4 shadow-md rounded-md  "
                >
                  <Link to={`/${item.id}`} className="cursor-pointer">
                    <img
                      src={item.src}
                      alt={item.src}
                      className="rounded-md hover:scale-105 duration-200 hover:cursor-pointer"
                    ></img>
                  </Link>
                  <div className="flex  ">
                    <button className="hover:scale-105 duration-200 w-1/2 m-4 p-4 ">
                      Demo
                    </button>
                    <button className="hover:scale-105 duration-200  w-1/2 m-4 p-4 ">
                      Code
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
