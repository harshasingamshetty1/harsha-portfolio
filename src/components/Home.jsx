import React from "react";
import HeroImage from "../assets/heroimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="  mx-auto max-w-screen-lg  flex flex-col items-center justify-center h-full px-4 md:pt-0 md:flex-row">
        <div className="flex pt-10 flex-col md:h-full justify-center ">
          <h2 className="text-4xl   sm:text-7xl font-bold text-white ">
            I'm a Full Stack Blockchain Developer
          </h2>
          <p className="text-gray-500  py-4 max-w-md">
            I have 2+ years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div className=" ">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              {/* here we have used, group as a custom class, for the link above and then
              made to rotate on the whole Link, instead of just when hoverd on the arrow if we would use
              hover:rotate-90. So now when we use, group-hover:rotate-90,
              the rotation happens for the entire Link, bcoz we gave the link class "group"
              
              */}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            src={HeroImage}
            alt="my profile"
            className="mr-auto md:h-full  object-cover  w-64 rounded-3xl max-w-md mt-10 md:mt-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
