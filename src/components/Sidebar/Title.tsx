import Image from "next/image";

const Title = () => {
  return (
    <section>
      <section className="w-full flex justify-center items-center gap-1">
        <h1 className="text-2xl ml-2 font-semibold">BOBAN</h1>
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

      {/* Sub Title Section */}
      <h2 className="text-lg text-[#C7C7C7]">GATEWAY CHURCH</h2>
      <h3 className="text-sm font-thin text-center text-[#AEAEAE]">Organizational Admin</h3>
    </section>
  );
};

export default Title;
