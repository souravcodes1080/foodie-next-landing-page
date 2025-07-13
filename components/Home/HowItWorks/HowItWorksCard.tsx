import Image from "next/image";
import React from "react";

type Props = {
  num: string;
  image: string;
  title: string;
  desc: string;
  buttonText: string;
};
function HowItWorksCard({ num, image, title, desc, buttonText }: Props) {
  return (
    <>
      <div className="relative">
        <div className="w-14 h-14 bg-pink-600 text-white text-xl font-bold flex items-center justify-center flex-col absolute top-0 left-0 rounded-full">
          {num}
        </div>
        <Image
          src={image}
          width={250}
          height={250}
          className="object-contain mx-auto"
          alt={title}
        />
        <h1 className="mt-6 text-lg sm:text-xl font-bold text-center">
          {title}
        </h1>
        <p className="text-center sm:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-3 font-medium">
          {desc}
        </p>
        <p className="mt-4 text-base font-bold text-blue-800 dark:text-blue-400 hover:text-blue-600 transition-all duration-150 cursor-pointer text-center">
          {buttonText} &rarr;
        </p>
      </div>
    </>
  );
}

export default HowItWorksCard;
