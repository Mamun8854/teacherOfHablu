import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import NoReviewError from "./NoReviewError";
const MyReview = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [dlt, setDlt] = useState(true);
  const [reviews, setReviews] = useState();
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
        });
    }
  }, [user?.email, dlt]);

  const handleDeleteReview = (id) => {
    const confirm = window.confirm("Are You Sure Delete this review?");
    if (confirm) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.deletedCount > 0) {
            toast.success("delete successfully");
            setLoading(false);
            setDlt(!dlt);
          }
        });
    }
  };

  return (
    <div>
      {reviews?.length > 0 ? (
        reviews?.map((review) => (
          <MyReviewCard
            key={review._id}
            review={review}
            handleDeleteReview={handleDeleteReview}
          ></MyReviewCard>
        ))
      ) : (
        <>
          <NoReviewError></NoReviewError>
        </>
      )}
    </div>
  );
};

export default MyReview;