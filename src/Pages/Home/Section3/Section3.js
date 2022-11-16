import React from "react";
import Lottie from "lottie-react";
import section1img from "./section1img.json";
import { Link } from "react-router-dom";
const Section3 = () => {
  return (
    <div>
      <section className=" dark:text-gray-900">
        <div className="container flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-4xl">
              The change in the learner may happen at the level of
              <span className="dark:text-violet-400 ml-2">
                knowledge, attitude or behavio
              </span>
              .
            </h1>
            <p className="mt-6 mb-8 text-lg text-gray-500 sm:mb-12">
              Learning is "a process that leads to change, which occurs as a
              result of experience and increases the potential for improved
              performance and future learning"
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="/allservices">
                <button className="btn btn-outline">See All Services</button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 w-[800px]  sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Lottie
              className="w-full"
              animationData={section1img}
              loop={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
