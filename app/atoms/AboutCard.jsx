"use client";
import { assets } from "@/assets/assets";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React, {useState} from "react";
import { FancyButton } from ".";

const rob = Roboto({})

const AboutCard = () => {
    const [showMore, setShowMore] = useState(false);

  return (

    <div className="relative flex flex-col md:flex-row w-full my-6 bg-white border border-slate-200 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),0_-3px_0px_inset_rgba(0,0,0,0.2)]
">
      <div className="relative p-2.5 lg:w-[25%] shrink-0 overflow-hidden max-md:hidden flex items-center justify-center shadow-md md:rounded-lg">
        <Image src={assets.avatar1} alt="" 
        className="h-90 w-fit rounded-md object-contain shadow-lg"
        />
      </div>
      <div className="p-6">
        <h4 className="mb-2 text-slate-800 text-2xl font-bold">
          About Me
        </h4>
        <div className={`mb-8 text-slate-600 leading-normal font-light ${rob.className}`}>
          I’m Deepankar Singh, a recent B.Tech graduate from IIT Jammu with strong skills in software development and data engineering. Proficient in C++, Python, SQL, and JavaScript, I enjoy solving complex problems through clean, efficient, and scalable code.
        </div>

        {/* Extra content */}
        {showMore && (
            <div className="mb-8 text-slate-600 leading-normal font-light">
                My experience includes building full-stack web applications using React and Node.js as well as developing data pipelines and analytics solutions with SQL and PySpark. I’m passionate about creating software that is both impactful and user-friendly, and I constantly strive to improve my craft.
                <p className="mt-8">
            Outside of work, I love playing sports, drawing, and exploring the stock market, which keep me curious, creative, and motivated.
                </p>
            </div>
        )}

        {/* Toggle Button */}
        <FancyButton 
        onClick={() => setShowMore(!showMore)} 
        text={`${showMore ? "Show Less" : "Learn More"}`}
        className="w-[11em] h-[3.2em] bg-blue-600"
        svgClass="text-blue-600"
        />
      </div>
    </div>
  );
};

export default AboutCard;
