"use client";
import { assets, cards } from "@/assets/assets";

export default function CardSection() {
  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative cursor-pointer transition-all duration-500 hover:translate-y-2 active:-translate-y-[4] w-auto h-auto rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
 flex justify-center overflow-hidden bg-white/70 backdrop-blur-lg 
    border border-white/70 p-5"
        >
          {/* Card Content */}
          <div className="w-full flex flex-col">
            <div className="flex flex-col items-center gap-2">
              {card.icon}
              <p className="flex items-center justify-start flex-col text-[12px] font-bold gap-2">
                {card.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
