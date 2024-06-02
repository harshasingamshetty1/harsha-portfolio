import React from "react";

const About = () => {
  return (
    /* Usually, first have a div for the entire screen as a container
        then start adding more divs within
        try to keep the outermost div only care about the container we are creating 
        i.e mostly (h,w, bg-color) only these.
    */
    <div
      name="about"
      className="w-full  max-md:pt-24 md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 max-sm:pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl  mt-20 max-sm:mt-12">
          Hey there 👋, I'm Harsha Singamshetty!
          <br />
          <br />
          The digital maestro who's here to make the tech world a wild and
          exciting ride! With more than 3 years under my belt as a Full-stack
          blockchain developer, I'm all about crafting innovative solutions and
          turning the development process into a fantastic adventure 🚀. <br />
          <br />
          I'm not your typical coder; I'm the one who brings the party to the
          pixels, making sure our tech journey is as thrilling as it is
          productive✨. If you're on the lookout for a full-stack blockchian
          wizard who can turn your ideas into reality with a dash of fun, you've
          just hit the jackpot! Let's roll up our sleeves and create some{" "}
          <span className="font-bold ">decentralized </span>
          magic together 🪄💻. <br />
          <br />
          Plus, I promise, I'm not just all code and no play - I'm a blast to
          work with! 🥳
        </p>
      </div>
    </div>
  );
};

export default About;
