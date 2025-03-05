import { IoLogOutOutline } from "react-icons/io5";

const Header = () => {
  return (
    <section className="px-4 sm:px-12 pt-3 sm:pt-10 bg-white">
      {/* Title and SignOut wrapper div  */}
      <section className="flex justify-between">
        <div>
          <h1 className="mb-1 text-3xl sm:text-6xl font-thin text-[#393939]">
            Media Library
          </h1>
          <h6 className="text-sm sm:text-2xl font-thin text-[#787878]">
            Helps you to organize your media
          </h6>
        </div>
        <div className="h-6 sm:flex justify-center items-center text-[#FF841F] hidden hover:cursor-pointer">
          <IoLogOutOutline className="text-lg" />
          <h4 className="font-semibold">SIGN OUT</h4>
        </div>
      </section>

      {/* Footer Path */}
      <small className="text-[9px] sm:text-xs text-[#5B5B5B] mt-4 sm:mt-6 block">
        Home{" > "}Organization{" > "}Authentic Amazing Kids Inc{" > "}Sites
        {" > "}Plano, TX{" > "}Libraries{" > "}Core library
      </small>
    </section>
  );
};

export default Header;
