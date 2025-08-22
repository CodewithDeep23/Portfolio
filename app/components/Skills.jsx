import React from "react";
import { CardSection } from "../atoms";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { assets } from "@/assets/assets";

const rob = Roboto({
  subsets: ["latin"]
});

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-4 py-2 mx-auto max-w-[1280px] scroll-mt-[74px] bg-black pb-5 lg:pb-20 pt-20"
    >
      {/* Background red box */}
      <div className="mb-10 max-lg:max-w-2xl w-full md:px-10 bg-red px-4">
        <h2 className="text-left text-5xl md:text-5xl font-bold flex flex-col scale-y-120 tracking-wide lg:leading-15 bg-gradient-to-r from-pink-400 to-blue-600 bg-clip-text text-transparent">
          <span>Skills & Expertise</span>
        </h2>
      </div>

      {/* Background Layers */}
      <div className="absolute inset-0 flex pt-10 items-center flex-col justify-center z-1 bg-gradient-to-b from-pink-400 to-blue-600 opacity-10">
        {/* <h1
          className={`text-[10rem] md:text-[16rem] font-bold bg-gradient-to-b from-blue-700 to-pink-500 bg-clip-text text-transparent z-20 opacity-90 select-none ${rob.className} blur-[2px]`}
        >
          Skills
        </h1> */}
      </div>

      {/* Foreground content */}
      <div
        className="relative z-10 mt-10 grid 
  grid-cols-[repeat(auto-fit,minmax(120px,1fr))] 
  gap-x-5 gap-y-5 justify-items-center
  md:px-8 py-2 items-center px-5 max-sm:grid-cols-3"
      >
        <CardSection />
      </div>
    </section>
  );
};

export default Skills;
