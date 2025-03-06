import { MdFilterListAlt } from "react-icons/md";

const Header = () => {
  return (
    <div className="sm:grid grid-cols-21 items-center text-[#9D9D9D] gap-4 py-4 hidden">
      {/* # */}
      <span className="col-span-1 text-end">#</span>

      {/* MEDIA */}
      <span className="col-span-11 flex items-center ml-3 gap-1">
        MEDIA
        <MdFilterListAlt className="text-[#BDBDBD]" />
      </span>

      {/* Uploaded By */}
      <span className="col-span-5 flex items-center gap-1">
        UPLOADED BY
        <MdFilterListAlt className="text-[#BDBDBD]" />
      </span>

      {/* Type */}
      <span className="col-span-2 flex items-center ml-3 gap-1">
        TYPE
        <MdFilterListAlt className="text-[#BDBDBD]" />
      </span>

      {/* Status */}
      <span className="col-span-2">STATUS</span>
    </div>
  );
};

export default Header;
