import SideBar from "@/components/Sidebar/SideBar";

export default function MediaLibrary() {
  return (
    <main
      className="h-screen grid   
      sm:grid-cols-[374px_1fr]   
      md:grid-cols-[398px_1fr]  
      lg:grid-cols-[420px_1fr] 
      xl:grid-cols-[450px_1fr]
      grid-rows-[1fr]"
    >
      <SideBar />
    </main>
  );
}
