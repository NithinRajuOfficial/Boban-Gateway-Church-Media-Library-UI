import { IoSearch } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdLibraryAdd } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const MainContainerHeader = () => {
  return (
    <section className="flex justify-between items-center">
      {/* Back Arrow */}
      <IoIosArrowBack className="block sm:hidden text-[#5b5b5b]" />
      <div className="flex items-center gap-14">
        <h1 className="text-[#8C8C8C] text-xl md:text-3xl font-thin">
          Your Media Libraries
        </h1>
        {/* Search icon for searching feature*/}
        <IoSearch className="text-[#a6a5a5] text-3xl mt-2 hidden sm:block" />
        {/* Plus icon for adding and ThreeDots for displaying searching feature*/}
        <div className="text-xl sm:hidden block">
          <FiPlus className="text-[#05B06C] inline mr-1" />
          <BsThreeDotsVertical className="text-[#5b5b5b] inline" />
        </div>
      </div>
      {/* Add Media Button and Listing style icons */}
      <div className="sm:flex items-center gap-3 hidden">
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
