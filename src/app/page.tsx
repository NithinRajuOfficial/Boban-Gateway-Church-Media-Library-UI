import MainContainer from "@/components/MainContainer/MainContainer";
import SideBar from "@/components/Sidebar/SideBar";

export default function MediaLibrary() {
  return (
    <main className="h-screen flex flex-col sm:flex-row overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main Container */}
      <MainContainer />
    </main>
  );
}
