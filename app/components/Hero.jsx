import { easeIn, easeInOut, easeOut, motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Raleway } from "next/font/google";
import { Attherate, Github, Linkdin } from "../atoms";

const raleway = Raleway({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <main
        id="top"
        className="relative w-full h-[calc(100vh-74px)] mx-auto scroll-mt-[74px]"
      >
        {/* Left gray section */}
        <div className="absolute inset-0 bg-bgone clip-left"></div>

        {/* Right black section */}
        <div className="absolute inset-0 bg-bgtwo clip-right"></div>

        {/* Content */}
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="hidden md:flex items-start justify-center flex-col pl-30">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className={`${raleway.className} flex flex-col gap-4`}
            >
              <h1 className="text-[40px] font-bold">Hi, I am</h1>
              <div className="flex flex-col gap-0 -space-y-3">
                <h1 className="text-[50px] font-bold ">Deepankar Singh</h1>
                <p className="text-[20px] font-extrabold bg-gradient-to-r from-[#7079f0] to-[#9f70f0] bg-clip-text text-transparent">
                  Software Developer / Backend Engineer
                </p>
              </div>
            </motion.div>
            <div className="flex mt-10 gap-7 items-center">
              <a href="mailto:deepankarsinghvm@gmail.com?subject=Let's Connect - From Your Portfolio&body=Hello, I wanted to connect with you.">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: easeInOut }}
                  className="bg-gray-light p-[10px] shadow-[0_2px_4px_0_rgba(14,30,37,0.12),0_2px_16px_0_rgba(14,30,37,0.32)] hover:shadow-[0_4px_8px_-2px_rgba(9,30,66,0.25),0_0px_0px_1px_rgba(9,30,66,0.08)]"
                >
                  <Image src={assets.attherate} alt="" className="w-[30px]" />
                </motion.div>
              </a>
              <a
                href="https://github.com/CodewithDeep23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easeInOut }}
                  className="bg-gray-light p-[10px] shadow-[0_2px_4px_0_rgba(14,30,37,0.12),0_2px_16px_0_rgba(14,30,37,0.32)] hover:shadow-[0_4px_8px_-2px_rgba(9,30,66,0.25),0_0px_0px_1px_rgba(9,30,66,0.08)]"
                >
                  <Image src={assets.github} alt="" className="w-[30px]" />
                </motion.div>
              </a>
              <a
                href="https://www.linkedin.com/in/deepankar-singh-a35b14296/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: easeInOut }}
                  className="bg-gray-light p-[10px] shadow-[0_2px_4px_0_rgba(14,30,37,0.12),0_2px_16px_0_rgba(14,30,37,0.32)] hover:shadow-[0_4px_8px_-2px_rgba(9,30,66,0.25),0_0px_0px_1px_rgba(9,30,66,0.08)]"
                >
                  <Image src={assets.linkidin} alt="" className="w-[30px]" />
                </motion.div>
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="relative flex items-center justify-center h-full overflow-hidden w-full"
          >
            <Image
              src={assets.avatar2}
              alt=""
              className="mt-[70px] min-h-screen max-w-4xl max-lg:mt-[20%] 
             rounded-2xl drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]"
            />
            <div className="md:hidden absolute w-full z-20 bottom-0 top-[50%] slanted-edge bg-white/20 mt-slanted-edge backdrop-blur-lg shadow-2xl"></div>
            <div className="md:hidden absolute w-full z-20 top-[50%] bottom-0 grid grid-cols-[2fr_auto]">
              
              <div
                className={`${raleway.className} relative flex flex-col justify-end h-full max-md:ml-10 max-sm:ml-2 mt-custom`}
              >
                {/* Responsive positioning */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1.2, x: 0 }}
                  transition={{ duration: 1, ease: easeInOut }}
                  className="absolute bottom-[20%] max-sm:bottom-[15%]"
                >
                  <h1 className="text-[26px] sm:text-[28px] font-extrabold text-black">
                    Hi, I am
                  </h1>
                  <div className="flex flex-col gap-0 -space-y-1">
                    <h1 className="text-[35px] sm:text-[36px] font-extrabold text-white">
                      Deepankar Singh
                    </h1>
                    <p className="text-[18px] sm:text-[22px] font-extrabold text-[#909090]">
                      Software Developer / Backend Engineer
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="px-4 flex flex-col justify-center gap-5 max-md:mr-10 max-sm:mr-2 items-center">
                <motion.a
                initial={{opacity: 0, scale: 2, rotate: 360}}
                animate={{opacity: 1, scale: 1, rotate: 0}}
                transition={{duration: 1, ease: easeInOut}}
                whileHover={{scale: 1.1}}
                  href="mailto:deepankarsinghvm@gmail.com?subject=Let's Connect - From Your Portfolio&body=Hello, I wanted to connect with you."
                  className="hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.8)] rounded-[50%] p-1 text-black"
                >
                  <Attherate color="white" className="w-[40px]" />
                </motion.a>
                <motion.a
                initial={{opacity: 0, scale: 2, rotate: 360}}
                animate={{opacity: 1, scale: 1, rotate: 0}}
                transition={{duration: 1, ease: easeInOut}}
                whileHover={{scale: 1.1}}
                  href="https://github.com/CodewithDeep23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.8)] rounded-[50%] p-1 text-black"
                >
                  <Github color="white" className="w-[40px]" />
                </motion.a>
                <motion.a
                initial={{opacity: 0, scale: 2, rotate: 360}}
                animate={{opacity: 1, scale: 1, rotate: 0}}
                transition={{duration: 1, ease: easeInOut}}
                whileHover={{scale: 1.1}}
                  href="https://www.linkedin.com/in/deepankar-singh-a35b14296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.8)] rounded-[50%] p-1 text-black"
                >
                  <Linkdin color="white" className="w-[40px]" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Hero;
