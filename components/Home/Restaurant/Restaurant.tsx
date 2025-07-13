import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "@/constant/Constant";

function Restaurant() {
  return (
    <>
      <div className="pt-1 pb-16">
        <div className="text-xl sm:text-2xl text-center font-extrabold">
          Available Restaurants Nearby Area
        </div>
        <div className="w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">
          {Restaurants.map((r, i) => {
            return (
              <div key={i}>
                <RestaurantCard
                  image={r.image}
                  title={r.title}
                  tag1={r.tag1}
                  tag2={r.tag2}
                  tag3={r.tag3}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <button className="px-9 pt-2.5 pb-2.5 sm:px-12 sm:py-3.5 cursor-pointer rounded-full font-boldtext-base sm:text-lg bg-cyan-700 text-white hover:bg-cyan-950 transition-all duration-300 dark:bg-cyan-300 dark:hover:bg-cyan-200 dark:text-black">
            Discover More &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
