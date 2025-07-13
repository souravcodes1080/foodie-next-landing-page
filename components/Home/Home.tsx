"use client"
import AOS from "aos"
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Restaurant from "./Restaurant/Restaurant";
import Category from "./Category/Category";
import HowItWorks from "./HowItWorks/HowItWorks";
import About from "./About/About";
import Feature from "./Feature/Feature";
import MobileApp from "./MobileAppSection/MobileApp";

function Home() {
  useEffect(()=>{
    const initAOS = async () =>{
      await import('aos')
      AOS.init({
        duration:700,
        easing:'ease-in',
        once:false,
        // anchorPlacement:'top-bottom',
        mirror: true,
        offset:320
      })
    }
    initAOS()
  },[])
  return (
    <div className="overflow-hidden">
      <Hero />
      <Restaurant />
      <Category />
      <HowItWorks />
      <About />
      <Feature />
      <MobileApp />
    </div>
  );
}

export default Home;
