import React, { useState } from "react";
import toast from "react-hot-toast";

const MyReviewCard = ({ review, handleDeleteReview, setDd }) => {
  const [edit, setEdit] = useState(false);
  //   const [updateReview, setUpdateReview] = useState();

  const editReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const updateReview = form.review.value;
    console.log(updateReview);

    if (!edit) {
      fetch(`http://localhost:5000/review/${review?._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ review: updateReview }),
      })
        .then((res) => res.json())
        .then((data) => {
          setDd(!data);
          toast.success("Review Update successfully");
        });
    }
  };
  console.log(review);

  return (
    <div>
      <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-100 dark:text-gray-900">
        <form onSubmit={editReview} className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-center">{review?.name}</h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <img
              className="rounded-full h-16 w-16"
              src={review?.userPhoto}
              alt=""
            />
            <span className="text-center">{review?.userName}</span>
          </div>
          <div className="flex flex-col w-full">
            <textarea
              rows="3"
              disabled={!edit}
              name="review"
              defaultValue={review?.review}
              className="p-4 rounded-md resize-none dark:text-gray-900 dark:bg-white"
            ></textarea>
          </div>
          <div className="flex items-center justify-center gap-10 py-5">
            <div>
              {edit ? (
                <button
                  onClick={() => setEdit(false)}
                  type="submit"
                  className="btn btn-outline"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => setEdit(true)}
                  className="btn btn-outline"
                >
                  Edit
                </button>
              )}
            </div>
            <button
              onClick={() => handleDeleteReview(review?._id)}
              className="btn btn-outline text-red-700 font-bold hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyReviewCard;
