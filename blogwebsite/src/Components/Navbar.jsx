// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
          <img src="{logo}" alt="" className="w-52 hover:scale-105 transition-all" />
        </a>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Home</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Products</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Explore</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3">
          <CiSearch className="absolute left-3 text-2xl text-gray-500" />
          <input type="text" placeholder="Search" className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500" />
        </div>

        <CiMenuBurger className="text-5xl xl:hidden block cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Home</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Products</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Explore</li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Contact</li>
        </div>
      </header>
    </>
  );
};

export default Navbar;
