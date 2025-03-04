import FooterLogo from "./FooterLogo";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Title from "./Title";

const SideBar = () => {
  return (
    // SideBar Component Starts Here
    <article className="h-full w-full px-4 py-4 md:py-10 flex flex-col items-center justify-around bg-[#0D1C3A]">
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
    </article>
  );
};

export default SideBar;
