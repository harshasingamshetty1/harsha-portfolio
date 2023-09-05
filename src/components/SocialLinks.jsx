import React from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const socials = [
    {
      id: 0,
      child: (
        <>
          <span className="text-2xl ml-4">Github</span>
          <FaGithub className="ml-4 mr-2" size={35} />
        </>
      ),
      href: "https://github.com/harshasingamshetty1",
      style: "rounded-tr-xl ",
    },
    {
      id: 1,
      child: (
        <>
          <span className="text-2xl ml-4">LinkedIn</span>
          <FaLinkedin className="ml-4 mr-2" size={35} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          <span className="text-2xl ml-4">Discord</span>
          <FaDiscord className="ml-4 mr-2" size={35} />
        </>
      ),
      href: "https://discord.com",
    },
    {
      id: 3,
      child: (
        <>
          <span className="text-2xl ml-4">Telegram</span>
          <FaTelegram className="ml-4 mr-2" size={35} />
        </>
      ),
      href: "https://telegram.com",
    },
    {
      id: 4,
      child: (
        <>
          <span className="text-2xl ml-4">Mail</span>
          <HiOutlineMail className="ml-4 mr-2" size={35} />
        </>
      ),
      href: "mailto:harshasingamshetty1@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          <span className="text-2xl ml-4">Resume</span>
          <BsPersonLinesFill className="ml-4 mr-2" size={35} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-xl ",
      download: true,
    },
  ];
  return (
    <div className="flex flex-col fixed top-[35%] left-0 px-2  ">
      <ul>
        {socials.map((item) => (
          <li
            key={item.id}
            className={
              "flex justify-between w-44 h-14  ml-[-130px] hover:rounded-lg  hover:ml-[-10px]  duration-300   bg-gray-500" +
              " " +
              item.style
            }
          >
            <a
              href={item.href}
              target="_blank"
              download={item.download}
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              {item.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
