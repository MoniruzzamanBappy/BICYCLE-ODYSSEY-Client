import React from "react";

const ReviewSingle = ({ item }) => {
  const { productName, review, email, img } = item;
  return (
    <div className="flex w-full">
      <div class="avatar mr-2">
        <div class="w-16 rounded-full">
          <img src={img} alt="product" />
        </div>
      </div>
      <div>
          <p>{productName}</p>
          <p>{email}</p>
          <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewSingle;
