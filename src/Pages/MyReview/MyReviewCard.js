import React from "react";

const MyReviewCard = ({ review }) => {
  return (
    <div className="py-5">
      <div>
        <div className="px-52">
          <div className="w-full text-center border-2 border-b-4 border-gray-200 rounded-xl bg-gray-100">
            <div className="grid grid-cols-6 p-5 gap-y-2">
              <div className="flex items-center">
                <img
                  alt=""
                  src={review?.userPhoto}
                  className="max-w-16 max-h-16 rounded-full"
                />
              </div>

              <div className="col-span-5 md:col-span-4 ml-4 lg:flex lg:items-center lg:flex-col">
                <p className="text-gray-600 font-bold">{review?.userName} </p>

                <p className="text-gray-400 ">
                  {" "}
                  Service Name :{" "}
                  <span className="text-orange-600 font-bold">
                    {review?.name}
                  </span>
                </p>

                <p className="text-gray-400 bg-white p-10 my-2 w-3/4 rounded-lg">
                  {" "}
                  {review?.review}{" "}
                </p>
              </div>
              <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end items-center">
                {/* <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
            {" "}
            FREE{" "}
          </p> */}
                <button className="btn btn-outline font-bold">Edit</button>
                <button
                  className="btn btn-outline font-extrabold ml-2 text-red-600 hover:text-red-600
          "
                >
                  X
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* {reviews.map((r) => (
        <MyReviewCard key={r._id} r={r}></MyReviewCard>
      ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
