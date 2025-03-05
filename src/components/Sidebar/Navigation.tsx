import React from "react";
import { navigationItemsLeft, navigationItemsRight } from "@/constants/Index";

const Navigation = () => {
  return (
    <section className="w-[50%] md:w-[40%] flex justify-between">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {navigationItemsLeft.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1"
            style={{ color: item.color }}
          >
            <h1 className="text-4xl text-center hover:cursor-pointer">
              {React.createElement(item.icon)}
            </h1>
            <small className="font-thin text-center hover:cursor-pointer">{item.name}</small>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {navigationItemsRight.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1"
            style={{ color: item.color }}
          >
            <h1 className="text-4xl text-center hover:cursor-pointer">
              {React.createElement(item.icon)}
            </h1>
            <small className="font-thin text-center hover:cursor-pointer">{item.name}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navigation;
