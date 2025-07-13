"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

function ResponsiveNavbar() {
    const [showNav, setShowNav] = useState(false);

    const openNavHandler = () =>{
        setShowNav(true)
    }

    const closeNavHandler = () =>{
        setShowNav(false)
    }
  return (
    <>
      <Navbar openNav={openNavHandler} />
      <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />
    </>
  );
}

export default ResponsiveNavbar;
