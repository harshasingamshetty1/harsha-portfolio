import React from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ProjectDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const { item } = location.state;
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
        className="w-[50%] max-lg:w-[65%] max-md:w-[70%] h-[60%] relative bg-opacity-75 bg-gray-800 rounded-lg text-white"
        //e.stopPropagation(), is a method used in JS event handling to prevent the event from "bubbling up" through the DOM tree.
        //we used it coz, as we have given "close" to onClick of parent div, so as this div also comes under that div, therfore without this stopPropagation(), the modal will get closed even when u click on this div.
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex justify-center m-4  ">
              <h2 className="text-center text-2xl font-bold flex  ">
                {item.title}
              </h2>
            </div>
            <div className="flex justify-center">
              <img
                src={item.src}
                alt={id}
                className="rounded-2xl object-cover w-2/3"
              />
            </div>

            <div className="flex   text-gray-200 justify-center my-4 w-full">
              <div className="flex w-2/3 ">
                <button className="hover:scale-110 w-1/2 p-2 bg-gradient-to-r from-cyan-600 to-blue-600  rounded-lg mr-2  text-lg duration-200  ">
                  Preview
                </button>

                <button className="hover:scale-110 w-1/2 p-2   ml-2 bg-gradient-to-l from-cyan-600 to-blue-600 text-lg rounded-lg duration-200   ">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 text-white">
            <h1 className="text-3xl my-4 mx-2">Description:</h1>
            <ul className="list-disc list-outside text-xl ml-10 mr-2">
              {/* Apply list-disc and list-inside classes */}
              {item.description.split("\n").map((line, index) => (
                <li key={index} className="mb-2">
                  {" "}
                  {/* Apply mb-2 for spacing between points */}
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default ProjectDetails;
