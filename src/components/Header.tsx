"use client";
import anime from "animejs";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const abogacia = document.getElementById("abogacia");
    const gestoria = document.getElementById("gestoria");
    const fiscal = document.getElementById("fiscal");
    const abogaciaNav = document.getElementById("nav-abogacia");
    const gestoriaNav = document.getElementById("nav-gestoria");
    const fiscalNav = document.getElementById("nav-fiscal");
    if (!abogacia) return () => {};
    if (!gestoria) return () => {};
    if (!fiscal) return () => {};
    if (!abogaciaNav) return () => {};
    if (!gestoriaNav) return () => {};
    if (!fiscalNav) return () => {};
    const abogaciaFunction = () => {
      window.scrollTo({
        behavior: "smooth",
        top: (window.pageYOffset + abogacia.getBoundingClientRect().top-60),
      });
    };
    const gestionFunction = () => {
      window.scrollTo({
        behavior: "smooth",
        top: (window.pageYOffset + gestoria.getBoundingClientRect().top-120),
      });
    };
    const fiscalFunction = () => {
      window.scrollTo({
        behavior: "smooth",
        top: (window.pageYOffset + fiscal.getBoundingClientRect().top-200)
      });
    };
    abogaciaNav.addEventListener("click", abogaciaFunction);
    gestoriaNav.addEventListener("click", gestionFunction);
    fiscalNav.addEventListener("click", fiscalFunction);
    return () => {
      abogaciaNav.removeEventListener("click", abogaciaFunction);
      gestoriaNav.removeEventListener("click", gestionFunction);
      fiscalNav.removeEventListener("click", fiscalFunction);
    };
  });
  return (
    <header className="bg-gestion sticky top-0 grid grid-cols-[1fr_min-content_1fr] place-items-center items-center px-5 shadow-md shadow-black/40 z-50">
      <div></div>
      <div className="flex w-64 items-center justify-items-center">
        <Image
          src={"/logo.png"}
          alt="logo grupo gestión"
          width={50}
          height={50}
        />
        <span className="text-white text-lg font-extrabold">GRUPO GESTIÓN</span>
      </div>
      <ul className="text-white w-full hidden md:flex space-x-11 text-lg justify-end">
        <li>
          <a id="nav-abogacia" className="relative">Abogacía</a>
        </li>
        <li>
          <a id="nav-gestoria" className="relative">Gestoría</a>
        </li>
        <li>
          <a id="nav-fiscal" className="relative">Fiscal</a>
        </li>
        <li>Blog</li>
        <li>Contacto</li>
      </ul>
    </header>
  );
}
