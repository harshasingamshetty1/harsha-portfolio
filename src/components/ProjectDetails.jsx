import React from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import reactParallax from "../assets/portfolio/reactParallax.jpg";

function ProjectDetails() {
  const navigate = useNavigate();
  const close = () => {
    navigate("..");
  };
  return ReactDOM.createPortal(
    <div
      className="w-full h-full flex items-center justify-center bg-gray-600  bg-opacity-30 backdrop-blur-sm fixed top-0
        "
      onClick={close}
    >
      <div
        className="w-[75%] h-[60%] relative bg-opacity-75 bg-gray-800 rounded-lg text-white"
        //e.stopPropagation(), is a method used in JS event handling to prevent the event from "bubbling up" through the DOM tree.
        //we used it coz, as we have given "close" to onClick of parent div, so as this div also comes under that div, therfore without this stopPropagation(), the modal will get closed even when u click on this div.
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="flex justify-around">
            <img src={reactParallax} className="w-[80%] md:w-[40%] " />
            <div className="flex flex-col justify-around ">
              <h2 className="text-center">Title</h2>
              <div>
                <button className="hover:scale-105 border-2  duration-200  mx-auto ">
                  Preview
                </button>
                <button className="hover:scale-105 border-2  duration-200   mx-auto ">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 ">
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default ProjectDetails;
