import React from "react";
import Image from "next/image";
import { playlistDetails } from "@/constants/Index";
import { BsThreeDotsVertical } from "react-icons/bs";

const PlaylistTableDesktopUI = () => {
  return (
    <>
      {playlistDetails.map((playlist, index) => (
        <div
          key={index}
          className="sm:grid grid-cols-21 items-center py-2 hidden"
        >
          {/* # */}
          <span className="col-span-1 text-center text-lg text-[#BCBCBC]">
            {index + 1}
          </span>

          {/* Media, title and description*/}
          <div className="col-span-11 ml-3 flex items-center gap-3 hover:cursor-pointer">
            <Image
              src={playlist.media}
              alt="media"
              width={80}
              height={50}
            />
            <div>
              <h1 className="text-[#656565]">{playlist.title}</h1>
              <small className="text-[#9D9D9D]">{playlist.description}</small>
            </div>
          </div>

          {/* Uploaded By */}
          <span className="col-span-5 text-[#989898] ml-3">
            {playlist.uploadedBy}
          </span>

          {/* Type */}
          <span className="col-span-2 text-[#3FAB63] text-2xl ml-6">
            {React.createElement(playlist.type)}
          </span>

          {/* Status  and Extra icon*/}
          <div className="col-span-2 flex gap-16 text-2xl text-[#3FAB63] ml-4">
            <span>
              {React.createElement(playlist.status)}
            </span>
            <span className="hover:cursor-pointer">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlaylistTableDesktopUI;
