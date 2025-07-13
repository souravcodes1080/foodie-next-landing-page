import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <div className="pt-16 pb-16">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src={"/images/a.png"}
              width={800}
              height={800}
              alt="about image"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-8 md:leading-12">
              We deliver our products as fast as superman can do
            </h1>
            <p className="mt-4 leading-6 sm:leading-8 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">
              We have super minimal and straight forward mobile app along with
              real live tracking feature and 100% secured transaction.
            </p>
            <div className="mt-8 ">
                <div className="flex mt-8 items-center space-x-6">
                    <p className="text-3xl md:text-5xl opacity-40 font-bold">01</p>
                    <div>
                        <h1 className="text-base sm:text-lg font-extrabold">Easy to use application</h1>
                        <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">We're driven beyond just finishing the projects. We want to find solutions using our website & apps.</p>
                    </div>
                </div>
                <div className="flex mt-8 items-center space-x-6">
                    <p className="text-3xl md:text-5xl opacity-40 font-bold">02</p>
                    <div>
                        <h1 className="text-base sm:text-lg font-extrabold">Deliver food within 30 min</h1>
                        <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">We deliver freshly prepared foods and groceries straight from the kitchen to your door step.</p>
                    </div>
                </div>
                <div className="flex mt-8 items-center space-x-6">
                    <p className="text-3xl md:text-5xl opacity-40 font-bold">03</p>
                    <div>
                        <h1 className="text-base sm:text-lg font-extrabold">100% reliable with privacy</h1>
                        <p className="mt-2 text-gray-800 dark:text-gray-300 font-medium text-sm sm:text-base">We have 100% secured payment gateway and strict privacy poliy guidelines.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
