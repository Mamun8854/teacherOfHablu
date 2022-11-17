import React from "react";
import useTitle from "../../Hook/useTitle";

const Review = ({ d }) => {
  useTitle("Review");
  return (
    <div>
      <div className=" bg-gray-100 flex items-center justify-center">
        <div className="px-10">
          <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div className="mt-4">
              <h1 className="text-lg text-gray-700 font-semibold">
                Review Of <span className="text-orange-600">{d?.name}</span>
              </h1>
              <p className="mt-4 text-md text-gray-600">{d?.review}</p>
              <div className="flex justify-between items-center">
                <div className="mt-4 flex items-center space-x-4 py-6">
                  <div className="">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={d?.userPhoto}
                      alt=""
                    />
                  </div>
                  <div className="text-sm font-semibold">{d?.userName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
