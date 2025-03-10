
import { MdOutlineVideocam } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineMusicNote } from "react-icons/md";
import { FaRegImage } from "react-icons/fa";

// Sidebar Navigation Items, Sidebar
export const navigationItemsLeft = [
  { name: "Organization", icon: "/organization.png", color: "#1CB06D" },
  { name: "Playlist", icon: "/playlist.png", color: "#1CB06D" },
  { name: "Plans", icon: "/plans.png", color: "#1CB06D" },
];

export const navigationItemsRight = [
  { name: "Library", icon: "/library.png", color: "#FF841F" },
  { name: "Packs", icon: "/packs.png", color: "#1CB06D" },
  { name: "Profile", icon: "/profile.png", color: "#1CB06D" },
];



// Playlist Details, MainComponent
export const playlistDetails = [
  {
    media: "/thumbnail1.png",
    title: "The Transformation",
    description: "God Seeks Availability Not Ability",
    uploadedBy: "John Deo",
    type: MdOutlineVideocam,
    status: AiOutlineClockCircle,
  },
  {
    media: "/thumbnail2.png",
    title: "The Triumphal Entry",
    description: "Second Coming Of Jesus Christ",
    uploadedBy: "Cristina Jose",
    type: MdOutlineMusicNote,
    status: GrStatusGood,
  },
  {
    media: "/thumbnail3.png",
    title: "David & Goliath",
    description: "If God Is With You Who Can Stand Against",
    uploadedBy: "David Joseph",
    type: FaRegImage,
    status: AiOutlineClockCircle,
  },
  {
    media: "/thumbnail4.png",
    title: "Song Of Thanksgiving",
    description: "Second Coming Of Jesus Christ",
    uploadedBy: "Larry Page",
    type: MdOutlineVideocam,
    status: GrStatusGood,
  },
  {
    media: "/thumbnail5.png",
    title: "The Parable Of The Talents",
    description: "Consider Accountability Of Our Gifts",
    uploadedBy: "Henry Ford",
    type: MdOutlineVideocam,
    status: GrStatusGood,
  },
  {
    media: "/thumbnail6.png",
    title: "David & Goliath",
    description: "If God Is With You Who Can Stand Against",
    uploadedBy: "Rose Felix",
    type: MdOutlineMusicNote,
    status: GrStatusGood,
  },
];
