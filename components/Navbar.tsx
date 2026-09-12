"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <Link href="/" className="text-indigo-600">
       StartupX
      </Link>

      <ul className="md:flex hidden items-center gap-10 text-sm">
        <li><a className="hover:text-gray-500/80 transition" href="#">Home</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Services</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Portfolio</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Pricing</a></li>
      </ul>

      <button
        type="button"
        className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get started
      </button>

      <button
        aria-label="menu-btn"
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="inline-block md:hidden active:scale-90 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="#" className="text-sm">Product</a></li>
            <li><a href="#" className="text-sm">Pricing </a></li>
            <li><a href="#" className="text-sm">FAQS</a></li>
            <li><a href="#" className="text-sm">Pricing</a></li>
          </ul>

          <button
            type="button"
            className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            See Plans
          </button>
        </div>
      )}
    </nav>
  );
}