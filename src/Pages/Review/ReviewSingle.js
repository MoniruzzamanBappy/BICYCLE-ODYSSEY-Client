import React from "react";
// import { AiFillStar } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

const ReviewSingle = ({ item }) => {
  const { productName, review, email, img, rating } = item;
  let star = parseInt(rating);
  return (
    <div class="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        <p>{email}</p>
        <p>Comment: {review}</p>
        <ReactStars
        count={5}
        size={24}
        value={star}
         activeColor="#ff8c00" />
      </div>
    </div>
  );
};

export default ReviewSingle;
