import React from "react";
import { useQuery } from "react-query";
import ReviewLoading from "../Shared/Loading/ReviewLoading";
import ReviewSingle from "./ReviewSingle";

const Review = () => {
  const { isLoading, data: reviews } = useQuery(["reviews"], () =>
    fetch(`https://bicycle-odyssey.herokuapp.com/reviews`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <ReviewLoading />;
  }
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-bold text-center">
        All Reviews
      </h1>
      <div className="grid grid-cols-1 mx-12 justify-between gap-16 lg:grid-cols-3 md:grid-cols-2  mt-16">
        {reviews.reverse().map((item) => (
          <ReviewSingle key={item._id} item={item}></ReviewSingle>
        ))}
      </div>
    </div>
  );
};

export default Review;
