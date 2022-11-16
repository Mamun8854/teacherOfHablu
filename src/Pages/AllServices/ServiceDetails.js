import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceDetails = () => {
  const service = useLoaderData();

  const { price, name, about, picture } = service;
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-100">
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <PhotoProvider>
              <PhotoView src={picture}>
                <img
                  className="object-cover object-center rounded w-[500px] h-[500px]"
                  alt="hero"
                  src={picture}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {name}
            </h1>
            <p className="mb-8 leading-relaxed bg-white p-10 rounded-lg">
              {about}
            </p>
            <p className="font-bold text-teal-600 py-4">$ {price}</p>
            <div className="flex justify-center">
              <Link to="/allservices">
                <button className="inline-flex text-black btn btn-outline font-bold py-2 px-6 rounded text-lg">
                  Back to previous
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="font-bold text-center text-4xl py-10">
          Drop Your Review
        </h3>
        <div className="text-center">
          <div className="flex justify-center">
            <label>
              <textarea
                className="rounded-lg p-4 text-gray-600 font-semibold"
                name=""
                id=""
                cols="100"
                rows="10"
              ></textarea>
            </label>
          </div>
          <button type="submit" className="btn btn-outline my-4 font-bold">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
