"use client";

import FooterLogo from "./FooterLogo";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Title from "./Title";
import { useState } from "react";
import Menu from "./Menu";
import { IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      {/* Menu Icon Only for Mobile Screen */}
      <Menu isMenuOpen={isMenuOpen} setMenuIsOpen={setMenuIsOpen} />

      {/* Sidebar Component */}
      <article
        className={`fixed top-0 left-0 h-screen w-full sm:w-[26rem] bg-[#0D1C3A] z-40 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 sm:relative sm:translate-x-0  sm:shadow-none`}
      >
        <section className="relative h-full w-full px-4 py-14 sm:py-0 sm:pb-18 sm:pt-16 flex flex-col items-center justify-around sm:justify-start sm:gap-12">
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

          {/* Sign Out Section */}
          <div className="absolute bottom-1 h-6 flex justify-center items-center gap-1 text-xs text-[#FF841F] sm:hidden hover:cursor-pointer">
            <IoLogOutOutline />
            <h4 className="font-semibold">SIGN OUT</h4>
          </div>
        </section>
      </article>
    </>
  );
};

export default SideBar;
