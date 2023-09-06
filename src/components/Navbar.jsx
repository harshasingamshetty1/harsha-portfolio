import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const links = [
    {
      id: 0,
      link: "home",
    },
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  const [nav, setNav] = useState(false);
  return (
    <div className="flex px-4 w-full h-24 justify-between items-center bg-black text-white fixed ">
      <h1 className=" text-5xl  font-signature ml-2 ">Harsh</h1>

      {/* this means our ul will be visible
        only when screen>768px
        */}
      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 text-gray-500 cursor-pointer font-medium
          hover:scale-105 duration-200 capitalize "
            >
              <Link to={link} smooth duration="500">
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="text-gray-500 cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>
      {/* Short-circuting */}
      {nav && (
        <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 ">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 py-6 text-4xl text-gray-500 cursor-pointer 
          hover:scale-105 duration-200 capitalize "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration="500"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
