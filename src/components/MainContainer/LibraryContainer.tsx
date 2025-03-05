import MainContainerHeader from "./MainContHeader";
import Playlist from "./Playlist";

const LibraryContainer = () => {
  return (
    <article className="h-[70%] px-12 py-8 flex flex-col bg-[#F4FFF9]">
      <MainContainerHeader />
      <Playlist/>
    </article>
  );
};

export default LibraryContainer;
