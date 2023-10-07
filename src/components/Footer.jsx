import React from "react";
import linkedIn from "../assets/linkedin.png";
import email from "../assets/mail.png";
import cv from "../assets/cv.png";
import g from "../assets/g.png";

function Footer() {
  return (
    <div className="z-10 bg-gray-800 border-gray-400">
      <div className="flex max-w-screen-lg mx-auto max-md:flex-col justify-between max-md:ml-2">
        <div className="flex items-center md:mb-4">
          <a
            href="https://github.com/harshasingamshetty1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={g}
              alt="github"
              className="p-2 border m-1 bg-gray-600 border-gray-600 rounded-lg w-10 h-10"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/harsha-vardhan-singamshetty-3a1a911b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedIn}
              alt="LinkedIN"
              className="p-2 border m-1 bg-gray-600 border-gray-600 rounded-lg w-10 h-10"
            />
          </a>
          <a
            href="mailto:harshasingamshetty1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={email}
              alt="email"
              className="p-2 border m-1 bg-gray-600 border-gray-600 rounded-lg w-10 h-10"
            />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            download={true}
            rel="noopener noreferrer"
          >
            <img
              src={cv}
              alt="resume"
              className="p-2 border m-1 bg-gray-600 border-gray-600 rounded-lg w-10 h-10"
            />
          </a>
        </div>

        <p className="text-white p-2 mb-4 max-md:mb-1 text-md">
          {" "}
          Copyright @harshasingamshetty1 all rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
