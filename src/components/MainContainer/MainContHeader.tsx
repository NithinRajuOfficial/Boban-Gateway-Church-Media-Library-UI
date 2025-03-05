import { IoSearch } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdLibraryAdd } from "react-icons/md";

const MainContainerHeader = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="flex  items-center gap-14">
        <h1 className="text-[#8C8C8C] text-3xl font-thin">
          Your Media Libraries
        </h1>
        <IoSearch className="text-[#a6a5a5] text-3xl mt-2" />
      </div>
      <div className="flex items-center gap-3">
        <IoListOutline className="text-[#05B06C] text-2xl" />
        <BsFillGrid3X3GapFill className="text-[#05B06C] text-2xl" />
        <button className="p-2 flex items-center gap-1 text-white bg-[#05B06C] rounded-lg">
          <span>
            <MdLibraryAdd />
          </span>
          Add Media
        </button>
      </div>
    </section>
  );
};

export default MainContainerHeader;
