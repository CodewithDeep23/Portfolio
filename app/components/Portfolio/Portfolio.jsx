import React, { useRef } from "react";
import Image from "next/image";
import { projects } from "@/assets/assets";
import { easeOut, motion } from "motion/react";
import { FancyButton } from "../../atoms";
import { TapButton } from "../../atoms/Button";

export function Portfolio() {

  return (
    <section
      id="portfolio"
      className="flex items-center mx-auto max-w-[1280px] justify-center bg-[#f2f2f2] pt-25 pb-10 md:pt-25 md:pb-32 scroll-mt-[74px]"
    >
      <div
        // ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 w-full mx-4 md:mx-10 lg:mx-[60px] gap-x-16 gap-y-0 items-stretch"
      >
        {/* Left column */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-20">
            <h2 className="text-black text-left text-5xl md:text-6xl font-bold">
              Selected{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-black max-w-[520px] mt-6 text-base">
              I enjoy turning ideas into real projects that not only solve
              problems but also inspire creativity. Here are some of my favorite
              works that pushed my boundaries and taught me the most.
            </p>
          </div>

          {projects.slice(0, 2).map((project, index) => (
            <motion.a
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 700, damping: 35 }
              }}
              key={index}
              href={project.link}
              target="_blank"
              className="block max-w-[550px] min-h-[500px] mb-10 p-4 md:p-8 rounded-2xl hover:shadow-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),0_-3px_0px_inset_rgba(0,0,0,0.2)] transition-all duration-500"
            >
              {project.image}

              {/* Tags */}
              <div className="mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block h-6 mr-2 px-4 rounded-[12px] bg-[#efefef] text-black text-sm"
                  >
                    <p className="h-full flex items-center">{tag}</p>
                  </span>
                ))}
              </div>

              <h3 className="text-black mt-4 mb-6 text-xl font-semibold tracking-[-1px]">
                {project.title}
              </h3>

              {/* Industry & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-4 md:gap-x-4 mb-10">
                <div>
                  <div className="text-[#666] uppercase tracking-[2px] font-medium text-sm">
                    Industry
                  </div>
                  <div className="text-black font-medium">
                    {project.industry}
                  </div>
                </div>
              </div>

              <div className="view-project text-black">View Project</div>
            </motion.a>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col items-center md:mt-25">
          {projects.slice(2).map((project, index) => (
            <motion.a
              whileHover={{
                y: -20,
                transition: { type: "spring", stiffness: 700, damping: 35 }
              }}
              key={index}
              href={project.link}
              target="_blank"
              className="block max-w-[550px] min-h-[500px] mb-10 p-4 md:p-8 rounded-2xl hover:shadow-xl bg-white shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),0_-3px_0px_inset_rgba(0,0,0,0.2)] transition-all duration-500"
            >
              {project.image}

              {/* Tags */}
              <div className="mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block h-6 mr-2 px-4 rounded-[12px] bg-[#efefef] text-black text-sm"
                  >
                    <p className="h-full flex items-center">{tag}</p>
                  </span>
                ))}
              </div>

              <h3 className="text-black mt-4 mb-6 text-xl font-semibold tracking-[-1px]">
                {project.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-4 md:gap-x-4 mb-10">
                <div>
                  <div className="text-[#666] uppercase tracking-[2px] font-medium text-sm">
                    Industry
                  </div>
                  <div className="text-black font-medium">
                    {project.industry}
                  </div>
                </div>
              </div>

              <div className="view-project text-black">View Project</div>
            </motion.a>
          ))}

          {/* View all projects button */}
          <a
            href="https://github.com/CodewithDeep23"
            target="_blank"
            className="mt-6 px-4 py-2 rounded-xl font-bold text-white"
          >
            {/* View All Projects */}
            <button 
            className="w-[12em] h-[3.5em] rounded-4xl 
    text-white font-bold text-xl
    bg-gradient-to-r from-pink-600 to-gray-700 
    hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-[0.15em_0.15em_#5566c2] p-0
    active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_#5566c2] cursor-pointer"
            >
              More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
