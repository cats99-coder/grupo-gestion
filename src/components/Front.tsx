'use client'

import anime from "animejs";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Front() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref) return () => {};
    anime({
      targets: "#listado-front li",
      autoplay: true,
      delay: anime.stagger(200),
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 2000
    });
  });
  return (
    <>
      <div
        ref={ref}
        className="md:flex md:items-center justify-center hidden text-white space-x-3 "
      >
        <Image
          src={"/logo-vectorial.png"}
          className="self-center md:h-24 md:w-24 lg:h-36 lg:w-36 hidden md:flex"
          alt="logo"
          width={150}
          height={150}
        />
        <span className="text-2xl md:text-5xl font-bold">GRUPO GESTIÓN</span>
      </div>
    </>
  );
}
