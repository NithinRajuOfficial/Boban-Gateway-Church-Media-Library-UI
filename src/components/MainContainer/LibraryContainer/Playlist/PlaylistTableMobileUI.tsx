import React from "react";
import Image from "next/image";
import { playlistDetails } from "@/constants/Index";
import { BsThreeDotsVertical } from "react-icons/bs";

const PlaylistTableMobileUI = () => {
  return (
    <section className="h-[calc(100vh-35vh)] overflow-y-scroll scrollbar-hide scroll-smooth block sm:hidden">
      {playlistDetails.map((playlist, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-4"
        >
          {/* Media, title and description, uploaded by, and status*/}
          <div className="flex items-center gap-3">
            <Image
              src={playlist.media}
              alt="media"
              width={80}
              height={50}
            />
            <div className="flex flex-col">
              <div>
                <h1 className="text-[#656565]">{playlist.title}</h1>
                <small className="text-[#9D9D9D] text-xs">
                  {playlist.description}
                </small>
              </div>
              <div className="flex justify-start items-center gap-3">
                <h1 className="text-[#656565] text-sm">
                  {playlist.uploadedBy}
                </h1>
                <small
                  className={`text-[#9D9D9D] ${
                    index === 0 || index === 2
                      ? "text-[#95454D]"
                      : "text-[#33B06B]"
                  }`}
                >
                  {React.createElement(playlist.status)}
                </small>
              </div>
            </div>
          </div>
          <span className="text-[#3FAB63]">
            <BsThreeDotsVertical />
          </span>
        </div>
      ))}
    </section>
  );
};

export default PlaylistTableMobileUI;
