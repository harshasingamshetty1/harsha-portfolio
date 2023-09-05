import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const links = [
    {
      id: 0,
      link: "Home",
    },
    {
      id: 1,
      link: "About",
    },
    {
      id: 2,
      link: "Portfolio",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Contact",
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
        {links.map((item) => {
          return (
            <li
              key={item.id}
              className="px-4 text-gray-500 cursor-pointer font-medium
          hover:scale-105 duration-200 capitalize "
            >
              {item.link}
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
          {links.map((item) => {
            return (
              <li
                key={item.id}
                className="px-4 py-6 text-4xl text-gray-500 cursor-pointer 
          hover:scale-105 duration-200 capitalize "
              >
                {item.link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
