import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { TapButton } from "../../atoms/Button";

const Footer = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col max-w-[1280px] items-center px-[60px] pt-15 pb-15 md:pt-15 md:pb-20 max-md:px-4 scroll-mt-[74px] bg-black mx-auto"
    >
        <hr className="absolute top-0 left-0 w-full h-[2px] border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-[shimmer_10s_linear_infinite]" />
      <div className="max-lg:max-w-2xl w-full">
        <h2 className="text-center text-4xl md:text-5xl font-bold flex flex-col scale-y-120 tracking-wide lg:leading-15 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Deepankar Singh
        </h2>
      </div>
      <div className="max-md:mt-4 flex flex-col items-center max-md:flex-row w-full max-md:justify-between">
        <div className="card flex gap-10 max-md:flex-col max-md:gap-[1px]">
          <a
            href="https://www.linkedin.com/in/deepankar-singh-a35b14296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-white w-fit hover:cursor-pointer md:mt-10 flex items-center gap-4 text-xl">
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
        <ul className="md:mt-5 flex items-center gap-[6px] lg:gap-20 font-bold text-[17px] max-md:flex-col max-md:gap-[1px] text-white">
          <li>
            <a
              href="#about"
              className=" rounded-4xl w-[130px] h-[46px] flex justify-center items-center "
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className=" rounded-4xl w-[130px] h-[46px] flex justify-center items-center "
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className=" rounded-4xl w-[130px] h-[46px] flex justify-center items-center "
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className=" rounded-4xl w-[130px] h-[46px] flex justify-center items-center "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-2 absolute z-20 text-sm text-gray-400">
        © 2025 Deepankar Singh. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
