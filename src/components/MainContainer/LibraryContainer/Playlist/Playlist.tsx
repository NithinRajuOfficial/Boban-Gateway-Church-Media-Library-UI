import Header from "./Header";
import PlaylistTableDesktopUI from "./PlaylistTableDesktopUI";
import PlaylistTableMobileUI from "./PlaylistTableMobileUI";

const Playlist = () => {
  return (
    <section className="h-screen">
      {/* Header Row */}
      <Header />

      {/* Playlist Details Desktop UI */}
      <PlaylistTableDesktopUI />

      {/* Playlist Details Desktop UI */}
      <PlaylistTableMobileUI />
    </section>
  );
};

export default Playlist;
