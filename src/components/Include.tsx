import Image from "next/image";

export default function Include({ text }: { text: string }) {
  return (
    <div className="flex items-center w-full  include bg-gestion text-xs md:text-base text-white font-bold px-3 py-1 rounded-full ">
      <Image src={"/check.png"} alt="check" width={25} height={25} />
      <p className="text-sm">{text}</p>
    </div>
  );
}
