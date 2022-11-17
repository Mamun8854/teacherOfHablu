import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Review from "./Review";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const displayName = user?.displayName;
  const email = user?.email;
  const photoURL = user?.photoURL;
  const [data, setData] = useState();
  const service = useLoaderData();
  const { price, name, about, picture, _id } = service;

  const date = Date.now();
  useEffect(() => {
    fetch(`http://localhost:5000/review/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewValue = form.text.value;
    const data = {
      userName: displayName,
      userEmail: email,
      userPhoto: photoURL,
      review: reviewValue,
      postId: _id,
      name,
      date: date,
    };
    if (user) {
      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Review added");
          form.reset();
        })
        .catch((error) => console.error(error.message));
    } else {
      toast.error("Please Login First, then add your review .");
    }
  };

  return (
    <div className="px-4  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-100">
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
        <h2 className="font-extrabold text-center text-xl py-20">
          Review for this service
        </h2>
        <div className="grid grid-cols-3">
          {data?.map((d) => (
            <Review key={d._id} d={d}></Review>
          ))}
        </div>
      </section>
      <section>
        <h3 className="font-bold text-center text-4xl py-10">
          Drop Your Review
        </h3>
        <div className="text-center">
          <form onSubmit={handleReview}>
            <div className="flex justify-center">
              <label>
                <textarea
                  className="rounded-lg p-4 text-gray-600 font-semibold"
                  name="text"
                  id=""
                  cols="100"
                  rows="5"
                ></textarea>
              </label>
            </div>

            {user ? (
              <button type="submit" className="btn btn-outline my-4 font-bold">
                Submit
              </button>
            ) : (
              <a href="#my-modal-2" className="btn btn-outline font-bold my-4">
                Submit
              </a>
            )}
            <p></p>
            <div className="modal" id="my-modal-2">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  You want to drop your own review??
                </h3>
                <p className="py-4">
                  Please Login First and then drop your review.
                </p>
                <div className="modal-action">
                  <Link to="/login" className="btn">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
