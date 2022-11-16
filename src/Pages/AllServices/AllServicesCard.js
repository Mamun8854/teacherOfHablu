import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AllServicesCard = ({ service }) => {
  const { _id, name, picture, about, price } = service;
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-100 dark:text-gray-900">
        <PhotoProvider>
          <PhotoView src={picture}>
            <img
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              alt="hero"
              src={picture}
            />
          </PhotoView>
        </PhotoProvider>
        <div className="mt-6 mb-2">
          <span className="block text-lg font-bold tracking-widest uppercase dark:text-violet-900">
            $ {price}
          </span>
          <h2 className="text-xl font-bold tracking-wide">{name}</h2>
        </div>
        <p className="dark:text-gray-900 mb-4">{about.slice(0, 100)}...</p>

        <Link
          to={`/serviceDetails/${_id}`}
          className="flex items-center gap-2 btn btn-outline font-semibold"
        >
          See Details <FaArrowRight></FaArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default AllServicesCard;
