import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

function Skills() {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black  "
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
