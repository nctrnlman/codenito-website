import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="contact-container">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-gray-50 via-lightgray to-gray-50">
        <h1 className="text-black font-montserrat italic font-light text-6xl">
          Have a project! <br /> Let’s discuss
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center bg-url(<path-to-image>) bg-cover bg-center border border-white rounded-lg backdrop-blur-md relative">
        <div className="absolute inset-0 bg-url(<path-to-grain-image>) opacity-10"></div>
        <form className="w-3/4 p-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-white text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 text-gray-900 rounded-md py-2 px-3 w-full"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 text-gray-900 rounded-md py-2 px-3 w-full"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-white text-lg">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
