import React from "react";
import HowItWorksCard from "./HowItWorksCard";

function HowItWorks() {
  return (
    <>
      <div className="pt-16 pb-16">
        <h1 className="text-xl sm:text-2xl text-center font-extrabold">
          Let's See How it Works
        </h1>
        <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          <div data-aos="fade-right">
            <HowItWorksCard
              num="01"
              image="/images/w1.png"
              title="Become a Delivery Man"
              desc="As a delivery driver, you'll make reliable money - working anytime, anywhere."
              buttonText="Start Earning"
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="200">
              <HowItWorksCard
              num="02"
              image="/images/w2.png"
              title="Become a Partner"
              desc="Grow your business and reach new customers by partnering with us."
              buttonText="Start Earning"
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="400">
             <HowItWorksCard
              num="03"
              image="/images/w3.png"
              title="Try Android/IOS App"
              desc="Get the best DoorDash experience with live order tracking."
              buttonText="Download"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
