import ThemeToggler from "@/components/Helper/ThemeToggler";
import { Navlinks } from "@/constant/Constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
function MobileNavbar({ showNav, closeNav }: Props) {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <>
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-250 z-[1002] bg-black/40 backdrop-blur-sm  w-full h-screen`}
      ></div>
      <div
        className={`${navOpen} text-white fixed justify-center flex flex-col h-full transform transition-all duration-300 delay-180 w-[80%]  sm:w-[60%] bg-blue-950 dark:bg-black space-y-6 z-[1050]`}
      >
        {Navlinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        <CgClose
          onClick={closeNav}
          className="absolute top-[1.4rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
        <div className="absolute bottom-[2.4rem] right-[2.4rem] sm:w-8 sm:h-8 w-6 h-6">
          <ThemeToggler />
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
