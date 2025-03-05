import { MdFilterListAlt } from "react-icons/md";

const Header = () => {
    return(
        <div className="sm:grid grid-cols-11 items-center text-[#9D9D9D] gap-4 py-4 border-b hidden">
                {/* # */}
                <span className="col-span-1 text-center">#</span>
        
                {/* MEDIA */}
                <span className="col-span-4 flex items-center gap-1">
                  MEDIA
                  <MdFilterListAlt />
                </span>
        
                {/* Uploaded By */}
                <span className="col-span-2 flex items-center gap-1">
                  UPLOADED BY
                  <MdFilterListAlt />
                </span>
        
                {/* Type */}
                <span className="col-span-2 flex items-center gap-1">
                  TYPE
                  <MdFilterListAlt />
                </span>
        
                {/* Status */}
                <span className="col-span-2">STATUS</span>
              </div>
    )
}

export default Header;  