import React from "react";

function About() {
  return (
    /* Usually, first have a div for the entire screen as a container
        then start adding more divs within
        try to keep the outermost div only care about the container we are creating 
        i.e mostly (h,w, bg-color) only these.
        unlike below, where I used flex, etc which is not a good practise
    */
    <div
      name="About"
      className=" flex flex-col justify-center lg:px-20 px-4  w-full h-screen  bg-gradient-to-b from-gray-800  to-black  "
    >
      <h1 className="max-w-screen-lg  font-bold text-5xl text-white  pb-8">
        <span className="border-b-4 border-gray-500">About</span>
      </h1>
      <div className=" text-xl">
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>
      </div>
    </div>
  );
}

export default About;
