import React from "react";
import Image from "next/image";
import { navigationItemsLeft, navigationItemsRight } from "@/constants/Index";

const Navigation = () => {
  return (
    <section className="w-full md:w-[40%] flex items-center justify-center gap-12">
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        {navigationItemsLeft.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-[6px]"
            style={{ color: item.color }}
          >
            <div className="w-[2.5rem] h-[2rem] sm:w-[2.8rem] sm:h-[2.4rem] relative hover:cursor-pointer">
              <Image
                src={item.icon}
                alt={item.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <small className="text-sm font-thin text-center hover:cursor-pointer">
              {item.name}
            </small>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        {navigationItemsRight.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-[6px]"
            style={{ color: item.color }}
          >
            <div className="w-[2.5rem] h-[2rem] sm:w-[2.8rem] sm:h-[2.4rem]  relative hover:cursor-pointer">
              <Image
                src={item.icon}
                alt={item.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <small className="text-sm font-thin text-center hover:cursor-pointer">
              {item.name}
            </small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navigation;
