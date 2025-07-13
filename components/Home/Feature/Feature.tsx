import React from "react";
import FeatureCard from "./FeatureCard";
import { Features } from "@/constant/Constant";

function Feature() {
  return (
    <>
      <div className="pt-16 pb-16">
        <h1 className="text-xl sm:text-2xl text-center font-extrabold">
          Our Quality Features
        </h1>
        <div className="w-[80%] mx-auto mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Features.map((f, i) => {
            return (
              <div key={i}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Feature;
