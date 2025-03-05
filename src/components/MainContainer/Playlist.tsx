import React from "react";
import Image from "next/image";
import { playlistDetails } from "@/constants/Index";
import { MdFilterListAlt } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";


const Playlist = () => {
  return (
    <section>
      {/* Header Row */}
      <div className="grid grid-cols-11 items-center text-[#9D9D9D] gap-4 py-4 border-b">
        {/* # */}
        <span className="col-span-1 text-center">#</span>

        {/* MEDIA */}
        <span className="col-span-4 flex items-center gap-1">
          MEDIA
          <MdFilterListAlt />
        </span>

        {/* Uploaded By */}
        <span className="col-span-2 flex items-center gap-1">
          Uploaded By
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

      {/* Playlist Details Mapping */}
      {playlistDetails.map((playlist, index) => (
        <div
          key={index}
          className="grid grid-cols-11 items-center gap-4 py-4 border-b"
        >
          {/* # */}
          <span className="col-span-1 text-center text-[#BCBCBC]">{index + 1}</span>

          {/* MEDIA */}
          <div className="col-span-4 flex items-center gap-3">
            <Image
              src={playlist.media}
              alt="media"
              width={80}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-[#656565]">{playlist.title}</h1>
              <small className="text-[#9D9D9D]">{playlist.description}</small>
            </div>
          </div>

          {/* Uploaded By */}
          <span className="col-span-2 text-[#989898]">{playlist.uploadedBy}</span>

          {/* Type */}
          <span className="col-span-2 text-[#3FAB63] text-xl">{React.createElement(playlist.type)}</span>

          {/* Status  and Extra icon*/}
          <div className="col-span-2 flex gap-16 text-xl">
          <span className="text-[#3FAB63]">{React.createElement(playlist.status)}</span>
          <span className="text-black"><BsThreeDotsVertical/></span>
          </div>
          
        </div>
      ))}
    </section>
  );
};

export default Playlist;
