import { IoLogOutOutline } from "react-icons/io5";

const Header = () => {
  return (
    <section className="w-full px-4 sm:px-12 pt-3 sm:pt-10 bg-white">
      <section className="">
        {/* Title and SignOut wrapper div  */}
        <section className="flex justify-between">
          <div className="">
            <h1 className="text-3xl sm:text-[3.4rem] font-thin text-[#393939]">
              Media Library
            </h1>
            <h6 className="leading-4 text-sm sm:text-2xl font-thin text-[#787878]">
              Helps you to organize your media
            </h6>
          </div>
          <div className="h-6 sm:flex justify-center items-center text-[#FF841F] font-semibold hidden hover:cursor-pointer">
            <IoLogOutOutline className="text-lg" />
            <h4>SIGN OUT</h4>
          </div>
        </section>

        {/* Footer Path */}
      </section>
      <small className="sm:-ml-6 text-[9px] sm:text-[.9rem] text-[#5B5B5B] mt-4 sm:mt-8 mb-1 sm:mb-4 block">
        Home{" > "}Organization{" > "}Authentic Amazing Kids Inc{" > "}Sites
        {" > "}Plano, TX{" > "}Libraries{" > "}Core library
      </small>
    </section>
  );
};

export default Header;
