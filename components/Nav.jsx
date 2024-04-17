"use client";
import Link from "next/link";
import Nlink from "./Nlink";
import { useState, useEffect } from "react";
import { navLinks } from "@/constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Ajoute une classe pour désactiver le défilement lorsque le menu est ouvert
      document.body.classList.add('overflow-hidden');
    } else {
      // Supprime la classe lorsque le menu est fermé pour réactiver le défilement
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <header className="px-4 py-2 sm:pb-0 pb-14 flex justify-between items-center bg-special_recycle">
        <div>
          <button onClick={toggleMenu} className={`sm:hidden top-5 right-5 bg-special z-50 w-10 h-10 rounded-full ${isMenuOpen ? 'fixed' : 'absolute'}`}>
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
        </div>
      <nav className="sm:flex sm:items-center space-x-4 sm:border-b sm:mx-14 text-special border-special font-semibold">
        <ul className="hidden sm:flex sm:flex-row sm:items-center sm:space-x-4">
          {navLinks.map((lien) => (
            <Nlink item={lien} key={lien.path} />
          ))}
        </ul>
        <div className={`sm:hidden fixed top-0 right-0 bg-special_recycle z-40 h-full w-full flex items-center justify-center 
        transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col items-center justify-center gap-4">
            <Link className="texte_fantome" data-text="HOME" href={"#"}>HOME</Link>
            <Link className="texte_fantome" data-text="ABOUT US" href={"#"}>ABOUT US</Link>
            <Link className="texte_fantome" data-text="SERVICES" href={"#"}>SERVICES</Link>
            <Link className="texte_fantome" data-text="CONTACT US" href={"#"}>CONTACT US</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
