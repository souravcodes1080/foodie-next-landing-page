import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function MobileApp() {
  return (
    <>
      <div className="pt-16 pb-16 transition-all duration-500">
        <div className="w-[80%] mx-auto mt-15 grid grid-cols-1 gap-6 lg:grid-cols-2 items-center">
          <Image
            src="/images/app.png"
            alt="Mobile image"
            width={800}
            height={800}
            className="object-cover"
          />
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold leading-8 sm:leading-12 ">
              Connexting our users with ios & android apps. Download from app
              store or google play store
            </h1>
            <p className="mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-300">
              Pick one of our stock themes, or create your custom theme with the
              most advanced theme editor on any online survey building tool.
              We're driven beyond just finishing the projects. We want to find
              solutions using our website & apps.
            </p>
            <div className="flex space-x-4 mt-8">
              <a
                href="#_"
                className="flex items-center group border border-gray-400 px-4 py-3 rounded-md bg-gray-950 hover:bg-white dark:hover:bg-black dark:bg-white transition-all duration-300"
              >
                <FaApple className="text-2xl mr-2 text-white group-hover:text-black dark:group-hover:text-white dark:text-black transition-all duration-300" />
                <div>
                  <p className="text-xs text-white group-hover:text-black dark:group-hover:text-white dark:text-black transition-all duration-300">
                    Download on the{" "}
                  </p>
                  <p className="text-sm font-semibold  text-white group-hover:text-black dark:group-hover:text-white dark:text-black transition-all duration-300 ">
                    App Store
                  </p>
                </div>
              </a>
              <a
                href="#_"
                className="flex items-center group border border-gray-400 px-4 py-3 rounded-md dark:hover:bg-black dark:bg-white bg-black hover:bg-white transition-all duration-300"
              >
                <FaGooglePlay className="text-2xl mr-2 dark:group-hover:text-white dark:text-black group-hover:text-black text-white transition-all duration-300" />
                <div>
                  <p className="text-xs group-hover:text-black text-white dark:group-hover:text-white dark:text-black transition-all duration-300">
                    Download on the{" "}
                  </p>
                  <p className="text-sm font-semibold group-hover:text-black text-white dark:group-hover:text-white dark:text-black transition-all duration-300 ">
                    Play Store
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileApp;
