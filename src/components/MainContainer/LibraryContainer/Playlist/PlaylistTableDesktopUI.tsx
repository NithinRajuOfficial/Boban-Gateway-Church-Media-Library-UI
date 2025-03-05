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
          className="sm:grid grid-cols-11 items-center gap-4 py-4 border-b hidden"
        >
          {/* # */}
          <span className="col-span-1 text-center text-[#BCBCBC]">
            {index + 1}
          </span>

          {/* Media, title and description*/}
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
          <span className="col-span-2 text-[#989898]">
            {playlist.uploadedBy}
          </span>

          {/* Type */}
          <span className="col-span-2 text-[#3FAB63] text-xl">
            {React.createElement(playlist.type)}
          </span>

          {/* Status  and Extra icon*/}
          <div className="col-span-2 flex gap-16 text-xl">
            <span className="text-[#3FAB63]">
              {React.createElement(playlist.status)}
            </span>
            <span className="text-black">
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlaylistTableDesktopUI;
