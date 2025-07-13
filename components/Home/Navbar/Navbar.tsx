"use client";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { Name, Navlinks } from "@/constant/Constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdDeliveryDining } from "react-icons/md";

type Props = {
  openNav: () => void;
};

function Navbar({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all  ${
        navBg ? " backdrop-blur-sm bg-white/40  dark:bg-black/40 " : "bg-transparent"
      } duration-200 h-[12vh] z-[100] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-950  rounded-full flex items-center justify-center flex-col">
            <MdDeliveryDining className="w-6 h-6 text-white " />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-blue-950 font-bold dark:text-white">
            {Name.name}
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-10 ">
          {Navlinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-black dark:hover:text-green-400 hover:text-green-700 font-bold transition-all duration-200 dark:text-white"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-950 dark:bg-white dark:text-black px-8 py-2.5 text-white font-bold rounded-lg hover:bg-black dark:hover:bg-green-400 transition-all duration-300 cursor-pointer">
            Join now
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-blue-950 lg:hidden dark:text-white"
          />
          <div className="hidden lg:block">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
