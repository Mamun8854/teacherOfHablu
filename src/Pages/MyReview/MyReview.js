import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";
const MyReview = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState();
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        });
    }
  }, [user?.email]);

  return (
    <div>
      {reviews?.map((review) => (
        <MyReviewCard key={review._id} review={review}></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReview;
