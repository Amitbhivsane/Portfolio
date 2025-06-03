import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sidemenuRef = useRef();

  const openMenu = () => {
    sidemenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sidemenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background header image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="bg-img" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px[-8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="icon"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

        {/* Icons and Buttons */}
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon"
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="font-Ovo hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4  dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="icon-con"
            />
          </a>

          {/* Mobile Menu Icon */}
          <button className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
              onClick={openMenu}
            />
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        <ul
          ref={sidemenuRef}
          className="fixed top-0 right-0 w-64 h-screen z-50 bg-rose-50 transition-transform duration-500 transform translate-x-full flex flex-col items-start pl-6 pt-20 gap-6 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo text-lg" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a
              className="font-Ovo text-lg"
              onClick={closeMenu}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
