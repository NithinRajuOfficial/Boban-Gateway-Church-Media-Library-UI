import Image from "next/image";

const Logo = () => {
  return (
    <section className="w-full max-w-[10rem] aspect-square relative mb-2">
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
  );
};

export default Logo;
