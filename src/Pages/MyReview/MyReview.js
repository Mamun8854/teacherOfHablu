import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hook/useTitle";
import MyReviewCard from "./MyReviewCard";
import NoReviewError from "./NoReviewError";
const MyReview = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [dlt, setDlt] = useState(true);
  const [reviews, setReviews] = useState();
  const [dd, setDd] = useState();
  useTitle("My Review");
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://assignment-11-server-rosy.vercel.app/review?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
        });
    }
  }, [user?.email, dlt, dd]);

  const handleDeleteReview = (id) => {
    const confirm = window.confirm("Are You Sure Delete this review?");
    if (confirm) {
      fetch(`https://assignment-11-server-rosy.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          setDlt(!dlt);
          toast.success("delete successfully");
        });
    }
  };

  return (
    <div>
      {reviews?.length > 0 ? (
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10">
          {reviews?.map((review) => (
            <MyReviewCard
              key={review._id}
              review={review}
              handleDeleteReview={handleDeleteReview}
              setDd={setDd}
            ></MyReviewCard>
          ))}
        </div>
      ) : (
        <div>
          <NoReviewError></NoReviewError>
        </div>
      )}
    </div>
  );
};

export default MyReview;
