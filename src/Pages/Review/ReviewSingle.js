import React from "react";

const ReviewSingle = ({ item }) => {
  const { productName, review, email, img, rating } = item;
  return (
    <div className="flex w-full">
      <div class="avatar mr-2">
        <div class="w-16 rounded-full">
          <img src={img} alt="product" />
        </div>
      </div>
      <div>
          <p>{productName}</p>
          <p className="text-xs">{email}</p>
          <p className="text-xs">{review}</p>
          {rating && <p className="text-xs">Ratings: {rating? rating: ""} star</p>}
      </div>
    </div>
  );
};

export default ReviewSingle;
