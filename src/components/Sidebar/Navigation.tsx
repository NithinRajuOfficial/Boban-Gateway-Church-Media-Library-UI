import { GoOrganization } from "react-icons/go";
import { MdVideoLibrary } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { MdPermMedia } from "react-icons/md";
import { GrPlan } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

const Navigation = () => {
  const navigationItemsLeft = [
    { name: "Organization", icon: <GoOrganization />, color: "#1CB06D" },
    { name: "Playlist", icon: <MdPlaylistPlay />, color: "#1CB06D" },
    { name: "Plans", icon: <GrPlan />, color: "#1CB06D" },
  ];

  const navigationItemsRight = [
    { name: "Library", icon: <MdVideoLibrary />, color: "#FF841F" },
    { name: "Packs", icon: <MdPermMedia />, color: "#1CB06D" },
    { name: "Profile", icon: <FaRegUser />, color: "#1CB06D" },
  ];

  return (
    <section className="w-[50%] md:w-[40%] flex justify-between">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {navigationItemsLeft.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1"
            style={{ color: item.color }}
          >
            <h1 className="text-4xl text-center">{item.icon}</h1>
            <small className="font-thin text-center">{item.name}</small>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {navigationItemsRight.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1"
            style={{ color: item.color }}
          >
            <h1 className="text-4xl text-center">{item.icon}</h1>
            <small className="font-thin text-center">{item.name}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Navigation;
