import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ item }) => {
  const navigate = useNavigate();
  const { _id, productName, img, order, quantity, price, description } = item;
  const handleBuyNow = (_id) => {
    navigate(`/purchase/${_id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>Price per unit: ${price}</p>
        <p>Min Order: {order}</p>
        <p>Available: {quantity}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleBuyNow(_id)} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
