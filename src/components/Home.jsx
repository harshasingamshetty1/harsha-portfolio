import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import HeroImage from "../assets/heroimage.png";

const Home = () => {
  const [typewriterText, setTypewriterText] = useState("");

  // Check screen size on component mount
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) {
        setTypewriterText("a Fullstack Blockchain Developer");
      } else {
        setTypewriterText("a Blockchain Developer");
      }
    };

    // Initial check
    checkScreenSize();

    // Listen for window resize
    window.addEventListener("resize", checkScreenSize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div
      name="home"
      className="md:h-screen max-md:pt-24 w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex pt-10 flex-col md:h-full justify-center w-2/3">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            Hello!
          </h2>
          <div className="md:flex items-center mt-2">
            <span className="text-white text-3xl">I am&nbsp;</span>
            <div className="flex flex-col md:flex-row md:flex-wrap">
              <span className="text-white text-3xl">
                <Typewriter
                  options={{
                    strings: ["Harsha Singamshetty", typewriterText],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 25,
                    delay: 65,
                  }}
                />
              </span>
            </div>
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2.5+ years of experience building and deploying smart
            contracts and software. Currently, I'm passionate about crafting
            applications on EVM-based chains and developing web solutions with
            technologies like Solidity, React, Tailwind, and Nest JS.
          </p>
          <div className="">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex max-md:justify-start">
          <img
            src={HeroImage}
            alt="my profile"
            className="mr-auto md:h-full  object-cover w-64  max-md:w-64 max-sm:w-48 rounded-3xl max-w-md mt-10 md:mt-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
