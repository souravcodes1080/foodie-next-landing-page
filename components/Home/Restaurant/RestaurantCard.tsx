import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
  tag1: string;
  tag2: string;
  tag3: string;
};
function RestaurantCard({ title, image, tag1, tag2, tag3 }: Props) {
  return (
    <div className="group">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-[250px] object-cover group-hover:brightness-60 transition-all duration-300 group-hover:scale-110 overflow-hidden "
        />
      </div>
      <h1 className="mt-4 w-fit dark:group-hover:text-green-300 group-hover:text-blue-950 transition-all duration-200 cursor-pointer text-base sm:text-lg font-bold">
        {title}
      </h1>
      <div className="flex items-center font-medium mt-3 space-x-2">
        <p className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white">
          {tag1}
        </p>
        <p className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white">
          {tag2}
        </p>
        <p className="bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white">
          {tag3}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
