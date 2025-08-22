import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faEnvelope,
  faMailForward,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex max-lg:flex-col max-w-[1280px] max-lg:items-center bg-black px-[60px] pt-15 pb-24 md:pt-25 md:pb-32 items-start max-md:px-4 scroll-mt-[74px]"
    >
      <div className="mb-10 max-lg:max-w-2xl w-full">
        <h2 className="text-white text-left text-5xl md:text-5xl font-bold flex flex-col scale-y-120 tracking-wide lg:leading-15">
          <span>Got a project in mind? </span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let’s connect
          </span>
        </h2>
        <p className="text-[#B3B3B3] max-w-[520px] mt-6 lg:mt-10 text-base lg:leading-7">
          From full-stack development to data engineering solutions, I’d love to
          collaborate. Share your thoughts below and I’ll respond shortly
        </p>
        <div className="lg:mt-28 flex gap-10 max-lg:hidden">
          <a href="mailto:deepankarsinghvm@gmail.com?subject=Let's Connect - From Your Portfolio&body=Hello, I wanted to connect with you.">
            <div className="text-white w-fit hover:cursor-pointer mt-10 flex items-center gap-4 text-xl">
              <FontAwesomeIcon
                className="hover:scale-110 transition-all duration-400"
                icon={faEnvelope}
                style={{ color: "#ffffff" }}
                size="2xl"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/deepankar-singh-a35b14296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-white w-fit hover:cursor-pointer mt-10 flex items-center gap-4 text-xl">
              <FontAwesomeIcon
                className="hover:scale-110 transition-all duration-400"
                icon={faLinkedin}
                style={{ color: "#ffffff" }}
                size="2xl"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="gradient-border w-full max-lg:max-w-2xl text-white flex flex-col gap-5 p-6 rounded-0 box-border lg:min-h-[500px]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ">
          Contact Us
        </h1>
        <form className="flex flex-col gap-5">
          {/* Your Name */}
          <div className="relative bg-[#171717] rounded-lg">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              required
              name="email"
              id="email"
              type="text"
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#414141] bg-transparent text-white placeholder:opacity-50 focus:outline-none focus:border-[#e81cff]"
            />
          </div>

          {/* Email */}
          <div className="relative w-full bg-[#171717] rounded-lg">
            <FontAwesomeIcon
              icon={faAt}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              required
              name="email"
              id="email"
              type="text"
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#414141] bg-transparent text-white placeholder:opacity-50 focus:outline-none focus:border-[#e81cff]"
            />
          </div>

          {/* Textarea */}
          <div className="relative w-full h-fit rounded-lg">
            <FontAwesomeIcon
              icon={faMessage}
              className="absolute left-3 top-6 -translate-y-1/2 text-gray-400"
            />
            <textarea
              required
              id="textarea"
              name="textarea"
              rows={5}
              placeholder="Type your message"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#414141] text-white placeholder:opacity-50 focus:outline-none focus:border-[#e81cff] bg-[#171717]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-2/5 px-4 py-3 mt-2 rounded-md border border-[#414141] bg-[#313131] text-gray-400 font-semibold flex justify-center items-center gap-2 cursor-pointer hover:bg-white hover:border-white hover:text-black active:scale-95 transition"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="lg:mt-35 flex gap-5 lg:hidden w-full max-lg:max-w-2xl">
        <a href="mailto:deepankarsinghvm@gmail.com?subject=Let's Connect - From Your Portfolio&body=Hello, I wanted to connect with you.">
          <div className="text-white w-fit hover:cursor-pointer mt-10 flex items-center gap-4 text-xl">
            <FontAwesomeIcon
              className="hover:scale-110 transition-all duration-400"
              icon={faEnvelope}
              style={{ color: "#ffffff" }}
              size="2xl"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/deepankar-singh-a35b14296/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white w-fit hover:cursor-pointer mt-10 flex items-center gap-4 text-xl">
            <FontAwesomeIcon
              className="hover:scale-110 transition-all duration-400"
              icon={faLinkedin}
              style={{ color: "#ffffff" }}
              size="2xl"
            />
          </div>
        </a>
        <a
          href="https://github.com/CodewithDeep23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white w-fit hover:cursor-pointer mt-10 flex items-center gap-4 text-xl">
            <FontAwesomeIcon
              className="hover:scale-110 transition-all duration-400"
              icon={faGithub}
              style={{ color: "#ffffff" }}
              size="2xl"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
