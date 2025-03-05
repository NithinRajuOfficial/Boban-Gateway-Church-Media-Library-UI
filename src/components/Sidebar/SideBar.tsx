"use client";

import FooterLogo from "./FooterLogo";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Title from "./Title";
import { useState } from "react";
import Menu from "./Menu";

const SideBar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      {/* Menu Icon Only for Mobile Screen */}
      <Menu isMenuOpen={isMenuOpen} setMenuIsOpen={setMenuIsOpen} />

      {/* Sidebar Component */}
      <article
        className={`fixed top-0 left-0 h-screen w-full sm:w-[35%] bg-[#0D1C3A] z-40 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 sm:relative sm:translate-x-0  sm:shadow-none`}
      >
        <div className="h-full w-full px-4 py-4 sm:py-10 flex flex-col items-center justify-around">
          <div className="flex flex-col items-center">
            {/* Logo Section */}
            <Logo />

            {/* Title Section */}
            <Title />
          </div>

          {/* Navigation Section */}
          <Navigation />

          {/* Footer Logo Section */}
          <FooterLogo />
        </div>
      </article>
    </>
  );
};

export default SideBar;
