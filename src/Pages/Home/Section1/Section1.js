import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="py-20">
      <div className="relative">
        <img
          className="absolute inset-0 object-cover w-full h-full z-[-100]"
          src="https://c4.wallpaperflare.com/wallpaper/935/849/231/background-tree-book-wallpaper-preview.jpg"
          alt=""
        />
        <div className="relative z-300 bg-black bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <a href="/" className="mb-6 sm:mx-auto">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                    <svg
                      className="w-10 h-10 text-deep-purple-900"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                </a>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                          width="52"
                          height="24"
                        />
                      </svg>
                      <span className="relative">Complete </span>
                    </span>{" "}
                    guideline from absolute beginners to getting hired.
                  </h2>
                  <p className="text-base text-gray-100 md:text-lg">
                    Personalized, fun, and interactive learning process. Enjoy
                    our gamified courses to master python, mobile app
                    development, cyber security, C programming, C++, and many
                    more.
                  </p>
                </div>
                <div>
                  <Link to="/allservices">
                    <button className="btn btn-outline z-10 text-white">
                      See All Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
