"use client";

import { ReactNode, useEffect, useRef } from "react";
import Include from "./Include";
import anime from "animejs/lib/anime.es";

export default function Section({
  id,
  title,
  children,
  relleno,
  servicios,
  style,
}: {
  id?: string;
  title: string;
  relleno?: ReactNode;
  children?: ReactNode;
  servicios?: string[];
  style: object;
}) {
  const track: any = useRef(null);
  useEffect(() => {
    if (!track.current) return () => {};
    const tl = anime.timeline({
      autoplay: false,
    });
    const barra = anime.timeline({
      autoplay: false,
    });
    barra.add({
      targets: `[data-id="${title}"] .banda`,
      duration: 1000,
      height: ["400px", "150px"],
    });
    const visible = () => {
      const screenY = window.scrollY;
      barra.seek(screenY);
      tl.seek(screenY * 10);
    };
    window.addEventListener("scroll", visible);
    return () => {
      window.removeEventListener("scroll", visible);
    };
  }, [title]);
  return (
    <section
      ref={track}
      id={id ? id : undefined}
      className="grid grid-cols-[min-content_minmax(0,1fr)] grid-rows-[min-content_minmax(0,1fr)] gap-x-2 md:gap-x-5 bg-white"
      data-id={title}
    >
      <div style={style} className="w-4 md:w-8 h-full bg-gestion banda sticky"></div>
      <div className="grow bg-white relative">
        <div
          className="sticky z-40"
          style={{ ...style, boxShadow: "0px 15px 20px white" }}
        >
          <div
            style={{ boxShadow: "0px 10px 20px white" }}
            className="absolute w-[calc(100%+20px)] overflow-hidden  -top-5 -left-2 h-20 bg-white z-10"
          ></div>
          <h1 className="uppercase relative font-extrabold shadow-white text-2xl md:text-5xl mb-6  bg-white z-30">
            {title}
          </h1>
        </div>
        {relleno && relleno}
        <div className="mt-16 bg-white flex flex-col">
          {children && children}
        </div>
      </div>
    </section>
  );
}
