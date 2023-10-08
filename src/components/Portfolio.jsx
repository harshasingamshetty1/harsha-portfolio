import React from "react";
import { Link } from "react-router-dom";
import SOC from "../assets/portfolio/socn.png";
import crowdcoin from "../assets/portfolio/cc.png";
import cryptoverse from "../assets/portfolio/cverse.png";
import calc from "../assets/portfolio/calc.png";
import p_website from "../assets/portfolio/p_website.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: SOC,
      title: "Sign On Chain",
      description:
        "Hello I am Harsha Lorem Epsum Lorem Epsum Lorem Epsum \n i am from knl Lorem Epsum Lorem Epsum Lorem Epsum  \n I am a bcd Lorem Epsum Lorem Epsum Lorem Epsum  \n I am getting a remote job of 100kLorem Epsum Lorem Epsum Lorem Epsum ",
    },
    {
      id: 2,
      src: crowdcoin,
      title: "CrowdCoin",
      description:
        "Hello I am Harsha Lorem Epsum Lorem Epsum Lorem Epsum \n i am from knl Lorem Epsum Lorem Epsum Lorem Epsum  \n I am a bcd Lorem Epsum Lorem Epsum Lorem Epsum  \n I am getting a remote job of 100kLorem Epsum Lorem Epsum Lorem Epsum ",
    },
    {
      id: 3,
      src: cryptoverse,
      title: "Cryptoverse",
      description:
        "Hello I am Harsha Lorem Epsum Lorem Epsum Lorem Epsum \n i am from knl Lorem Epsum Lorem Epsum Lorem Epsum  \n I am a bcd Lorem Epsum Lorem Epsum Lorem Epsum  \n I am getting a remote job of 100kLorem Epsum Lorem Epsum Lorem Epsum ",
    },
    {
      id: 4,
      src: calc,
      title: "Calculator",
      description:
        "Hello I am Harsha Lorem Epsum Lorem Epsum Lorem Epsum \n i am from knl Lorem Epsum Lorem Epsum Lorem Epsum  \n I am a bcd Lorem Epsum Lorem Epsum Lorem Epsum  \n I am getting a remote job of 100kLorem Epsum Lorem Epsum Lorem Epsum ",
    },
    {
      id: 5,
      src: p_website,
      title: "Portfolio Website",
      description:
        "Hello I am Harsha Lorem Epsum Lorem Epsum Lorem Epsum \n i am from knl Lorem Epsum Lorem Epsum Lorem Epsum  \n I am a bcd Lorem Epsum Lorem Epsum Lorem Epsum  \n I am getting a remote job of 100kLorem Epsum Lorem Epsum Lorem Epsum ",
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
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 sm:mx-4 mx-16">
            {portfolios.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col shadow-gray-600 mb-4 shadow-md rounded-md"
                >
                  <Link
                    to={`/${item.id}`}
                    state={{ item }}
                    className="cursor-pointer"
                  >
                    <div
                      className="relative w-full h-0"
                      style={{ paddingBottom: "70%" }}
                    >
                      <img
                        src={item.src}
                        alt={item.src}
                        className="absolute inset-0 rounded-md hover:scale-105 duration-200 hover:cursor-pointer object-cover w-full h-full"
                      />
                    </div>
                  </Link>
                  <div className="flex justify-center text-md  shadow-gray-600 shadow-sm font-bold py-4">
                    <p>{item.title}</p>
                  </div>
                  <div className="flex">
                    <button className="hover:scale-105 duration-200 w-1/2 m-4 p-2">
                      Demo
                    </button>
                    <button className="hover:scale-105 duration-200 w-1/2 m-4 p-2">
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
