import MainContainerHeader from "./MainContHeader";
import Playlist from "./Playlist/Playlist";

const LibraryContainer = () => {
  return (
    <article className="px-4 sm:px-12 py-2 sm:py-8 flex flex-col bg-[#F4FFF9]">
      <MainContainerHeader />
      <Playlist/>
    </article>
  );
};

export default LibraryContainer;
