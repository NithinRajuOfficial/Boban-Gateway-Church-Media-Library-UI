import Header from "./Header";
import LibraryContainer from "./LibraryContainer";

const MainContainer = () => {
  return (
    <article className="flex flex-col w-full h-screen">
      {/* Header */}
      <Header />

      {/* Playlist */}
      <LibraryContainer />
    </article>
  );
};

export default MainContainer;
