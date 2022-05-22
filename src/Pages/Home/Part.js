import React from "react";

const Part = ({item}) => {
    const {productName, img ,order,quantity,price, description} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>Price per unit: ${price}</p>
        <p>Min Order: {order}</p>
        <p>Available: {quantity}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
