import React from "react";

const Button = ({ prop }) => {
  return (
    <button className="flex items-center justify-center gap-3 w-[15em] h-[5em] rounded-[3em] bg-[#1C1A1C] cursor-pointer transition-all duration-[450ms] ease-in-out">
      <span className="text font-semibold text-[#AAAAAA] text-xl">{prop}</span>
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        className="sparkle transition-all duration-[800ms] ease"
      >
        <path
          d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  );
};

const FancyButton = ({
  text = "Get started",
  className = "",
  svgColor = "currentColor",
  svgPClass = "",
  svgClass = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`relative text-white font-medium text-[17px] rounded-xl px-5 flex items-center shadow-[inset_0_0_1.6em_-0.6em_#714da6] cursor-pointer overflow-hidden pr-[3.3em] group transition-all duration-300 ${className}`}
    >
      {text}
      <div
        className={`absolute right-1 bg-white h-[2.8em] w-[2.5em] rounded-xl flex items-center justify-center shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] transition-all duration-300 group-hover:w-[calc(100%-0.6em)] group-active:scale-95 ${svgPClass}`}
      >
        <svg
          className={`w-[1.5em] text-[#7b52b9] transition-transform duration-300 group-hover:translate-x-[0.1em] ${svgClass}`}
          //   fill={svgColor}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 
            7.778-1.414-1.414L16.172 13H4v-2z"
          ></path>
        </svg>
      </div>
    </button>
  );
};

const TapButton = () => {
  return (
    <button className="bg-gradient-to-r from-[#7079f0] via-[#8a7bf5] to-[#c070f0] text-white p-[0.45em] pl-1 text-[17px] font-medium rounded-[0.9em] cursor-pointer tracking-wider flex items-center shadow-[inset_0_0_1.6em_-0.6em_#714da6] overflow-hidden relative h-[2.8em] pr-[3em] transition-transform duration-200
    hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] hover:shadow-[0.15em_0.15em_#5566c2]
    active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_#5566c2]">
      Contact
      <div className="ml-[1em] absolute flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] shadow-[0.1em_0.1em_0.6em_0.2em_#7a8cf3] right-[0.3em] transition-all duration-300">
        <svg
          height={24}
          width={24}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          />
        </svg>
      </div>
    </button>
  );
};

export { Button, FancyButton, TapButton };
