import React from "react";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import tailwind from "../assets/tailwind.png";
import f1 from "../assets/f1.jpeg";
import graph from "../assets/graph.jpeg";
import hh from "../assets/hh.png";
import nestjs from "../assets/nestjs.png";
import solidity from "../assets/solidity.png";
import nodeJS from "../assets/node.png";

function Skills() {
  const skills = [
    {
      id: 1,
      src: solidity,
      title: "Solidity",
      style: "shadow-gray-400",
    },

    {
      id: 2,
      src: hh,
      title: "Hardhat",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: f1,
      title: "Foundry",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: graph,
      title: "Graph Protocol",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nestjs,
      title: "NestJS",
      style: "shadow-red-400",
    },
    {
      id: 6,
      src: nodeJS,
      title: "NodeJS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-500",
    },
    {
      id: 8,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div
      name="skills"
      className="w-full md:h-screen max-md:pt-24 bg-gradient-to-b from-gray-800 to-black  "
    >
      <div className="flex flex-col max-w-screen-lg w-full h-full justify-center mx-auto  ">
        <div className="text-white mx-4">
          <p className="text-4xl border-b-4 inline border-gray-500 ">Skills</p>
          <p className="mt-5 ">There are the technologies I've worked with</p>
        </div>

        <div className="mt-14">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 md:px-4 px-16 ">
            {skills.map((item) => {
              return (
                <div
                  key={item.id} // Add a unique "key" prop here
                  className={
                    " hover:cursor-pointer hover:scale-105  duration-500 rounded-lg flex flex-col items-center justify-center p-2 mb-1  shadow-md" +
                    " " +
                    item.style
                  }
                >
                  <img
                    src={item.src}
                    alt={item.title + "image"}
                    className="w-20 mx-auto "
                  ></img>
                  <p className="text-white mt-4"> {item.title} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
