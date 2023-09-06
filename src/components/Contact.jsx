import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 "
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg mx-auto">
        <div className="text-white ml-6">
          <p className="text-4xl   inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="my-6">Submit the form below to get in touch with me!</p>
        </div>

        <div className="mt-10">
          <form
            action="https://getform.io/f/683806eb-b21d-4552-9366-fcaaeb3bd167"
            method="POST"
          >
            <div className="md:mx-auto flex flex-col text-white md:w-1/2 mx-6">
              <input
                className="   py-2 border-2   bg-transparent rounded-md "
                type="text"
                placeholder="Enter your name"
                name="name"
              ></input>
              <input
                className="  py-2 border-2   bg-transparent rounded-md my-4"
                type="text"
                placeholder="Enter your email"
                name="email"
              ></input>
              <textarea
                className="py-2 border-2   bg-transparent rounded-md "
                type="text"
                placeholder="Enter your message"
                rows="10"
                name="message"
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
