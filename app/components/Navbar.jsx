"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { easeIn, motion, spring } from "motion/react";
import { TapButton } from "../atoms/Button";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`text-white w-full flex justify-between border-[#FFFFFF] fixed top-0 items-center lg:px-8 xl:px-[4%] py-3 z-50 bg-black`}
      >
        <div className=" w-[50px] p-1 h-[50px] rounded-4xl border-2 border-white hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.8)] transition duration-300 hover:p-0 max-lg:ml-3 
    hover:translate-x-[-0.05em] hover:translate-y-[-0.05em]
    active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_#5566c2]">
          <a href="#top">
            <Image
              src={assets.logo}
              alt="Portfolio logo"
              className="rounded-4xl"
            />
          </a>
        </div>
        <ul className="hidden md:flex items-center gap-[6px] lg:gap-[8px] font-bold text-[17px] max-lg:mr-3">
          <li>
            <a
              href="#about"
              className="hover:bg-white hover:rounded-4xl hover:text-black w-[130px] h-[46px] flex justify-center items-center transition-transform duration-200
    hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-[0.15em_0.15em_#5566c2]
    active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_#5566c2]"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:bg-white hover:rounded-4xl hover:text-black w-[130px] h-[46px] flex justify-center items-center transition-transform duration-200
    hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-[0.15em_0.15em_#5566c2]
    active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_#5566c2]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:bg-white hover:rounded-4xl hover:text-black w-[130px] h-[46px] flex justify-center items-center transition-transform duration-200
    hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-[0.15em_0.15em_#5566c2]
    active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_#5566c2]"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className=" rounded-4xl text-black w-[130px] h-[46px] flex justify-center items-center "
            >
              <TapButton/>
            </a>
          </li>
        </ul>

        {/* Mobile menu wrapper */}
        <div ref={menuRef} className="relative md:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            className="block md:hidden mr-3 hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="2x" />
          </button>

          {/* For mobiles */}
          {isOpen && (
            <motion.ul
            className="md:hidden flex-col fixed -right-0 bottom-0 w-full z-50 h-[228px] transition duration-500 items-center bg-[#0B0B0B]/30 backdrop-blur-sm font-semibold top-[64px]">
              <motion.li
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ease: easeIn,
                  type: spring,
                }}
                whileHover={{ scale: 1.1 }}
                className="h-[57px] w-full hover:text-black hover:bg-white/40 hover:backdrop-blur-xl"
              >
                <a
                  className="w-full h-full flex justify-center items-center"
                  href="#about"
                  onClick={() => setOpen(false)}
                >
                  About me
                </a>
              </motion.li>
              <motion.li
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ease: easeIn,
                  type: spring,
                }}
                whileHover={{ scale: 1.1 }}
                className="h-[57px] w-full hover:text-black hover:bg-white/40 hover:backdrop-blur-xl"
              >
                <a
                  className="w-full h-full flex justify-center items-center"
                  href="#skills"
                  onClick={() => setOpen(false)}
                >
                  Skills
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ease: easeIn,
                  type: spring,
                }}
                whileHover={{ scale: 1.1 }}
                className="h-[57px] w-full hover:text-black hover:bg-white/40 hover:backdrop-blur-xl"
              >
                <a
                  className="w-full h-full flex justify-center items-center"
                  href="#portfolio"
                  onClick={() => setOpen(false)}
                >
                  Portfolio
                </a>
              </motion.li>
              <motion.li
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  ease: easeIn,
                  type: spring,
                }}
                whileHover={{ scale: 1.1 }}
                className="h-[57px] w-full hover:text-black hover:bg-white/40 hover:backdrop-blur-xl"
              >
                <a
                  className="w-full h-full flex justify-center items-center"
                  href="#contact"
                  onClick={() => setOpen(false)}
                >
                  Contact Me
                </a>
              </motion.li>
            </motion.ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
