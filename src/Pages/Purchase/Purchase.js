import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./../Shared/Loading/Loading";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

const Purchase = () => {
  const { _id } = useParams();
  const [user, loading] = useAuthState(auth);

  const {
    isLoading,
    data: part,
    refetch,
  } = useQuery(["available"], () =>
    fetch(`http://localhost:5000/parts/${_id}`).then((res) => res.json())
  );

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const address = e.target.address.value;
    const orderQuantity = e.target.quantity.value;
    const ordered = {
      userName: user.displayName,
      partName: part.productName,
      email: user.email,
      number,
      orderQuantity,
      address,
      price: part.price,
    };
    fetch("http://localhost:5000/ordered", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ordered),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          const deliveredQuantity = parseInt(part.quantity) - orderQuantity;
          const url = `http://localhost:5000/parts/${_id}`;
          const { data } = axios.put(url, { deliveredQuantity });

          console.log(data);
          toast.success("Added to cart, Successfully");
          e.target.reset();
          refetch();
        } else {
          toast.error("Added to cart, Failed");
        }
      });
  };

  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div className="lg:flex justify-center w-full mx-auto">
      <div className="card my-5 w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={part.img} alt="tools" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{part.productName}</h2>
          <p>Price per unit: ${part.price}</p>
          <p>Min Order: {part.order}</p>
          <p>Available: {part.quantity}</p>
          <p>{part.description}</p>
        </div>
      </div>
      <div className="card p-5 my-5 lg:mx-5 w-96 bg-base-100 shadow-xl">
        <form
          onSubmit={handleAddToCart}
          className="grid grid-cols-1 pt-2.5 justify-items-center gap-5"
          action=""
        >
          <input
            type="text"
            readOnly
            name="name"
            value={part.productName}
            className="input input-bordered  w-full max-w-md"
          />

          <input
            type="text"
            name="name"
            value={user?.displayName || ""}
            readOnly
            placeholder="Full Name"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="email"
            name="email"
            readOnly
            value={user?.email || ""}
            placeholder="Email"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="text"
            name="address"
            required
            placeholder="Address"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="number"
            name="number"
            required
            placeholder="Number"
            className="input input-bordered w-full max-w-md"
          />
          <input
            type="number"
            name="quantity"
            required
            placeholder="Order Quantity"
            className="input input-bordered w-full max-w-md"
          />

          <input
            className="btn w-full max-w-md btn-accent"
            type="submit"
            value="Add to Cart"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
