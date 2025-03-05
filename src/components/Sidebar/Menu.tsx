import Image from "next/image";
import { IoMdMenu } from "react-icons/io";

interface MenuProps {
  isMenuOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setMenuIsOpen }) => {
  return (
    <article className="h-[12%] p-4 flex justify-start items-center bg-[#0D1C3A] sm:hidden">
      <section className="w-full max-w-[3rem] aspect-square relative">
        <Image
          src="/logo.png"
          alt="Logo"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 50vw, 
                 (max-width: 768px) 33vw, 
                 (max-width: 1024px) 25vw, 
                 20vw"
        />
      </section>
      <section className="w-[40%] flex justify-center items-center gap-2">
        <h1 className="text-2xl font-semibold">BOBAN</h1>
        <div className="w-full max-w-[1rem] aspect-square relative">
          <Image
            src="/title_sub_logo.png"
            alt="Title Sub Logo"
            fill
            className="object-contain"
            sizes="1rem"
          />
        </div>
      </section>
      <IoMdMenu
        className={`text-3xl fixed top-6 right-4 cursor-pointer z-50 sm:hidden ${
          isMenuOpen ? "text-[#FF841F]" : "text-white"
        }`}
        onClick={() => setMenuIsOpen((prev) => !prev)}
      />
    </article>
  );
};

export default Menu;
