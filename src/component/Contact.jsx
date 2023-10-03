import React from 'react';


function Contact() {
  return (
    <div className="contact-container">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-gray-50 via-lightgray to-gray-50">
        <h1 className="text-white font-montserrat italic font-light text-6xl">
          Have a project!<br />Let’s discuss
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center bg-url(<path-to-image>) bg-cover bg-center border border-white rounded-lg backdrop-blur-md relative">
        <div className="absolute inset-0 bg-url(<path-to-grain-image>) opacity-10"></div>
        <form className="w-3/4 p-6">
          <div className="mb-4">
            <label htmlFor="name" className="text-white text-lg">Name</label>
            <input
              type="text"
              id="name"
              className="bg-gray-100 text-gray-900 rounded-md py-2 px-3 w-full"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white text-lg">Email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 text-gray-900 rounded-md py-2 px-3 w-full"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-white text-lg">Message</label>
            <textarea
              id="message"
              className="bg-gray-100 text-gray-900 rounded-md py-2 px-3 w-full h-32"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#505050] hover:bg-[#434343] text-white rounded-md py-2 px-4 text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
