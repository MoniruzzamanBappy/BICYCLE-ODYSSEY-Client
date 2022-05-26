import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./../Shared/Loading/Loading";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [user, loading] = useAuthState(auth);

  const {
    isLoading,
    data: part,
    refetch,
  } = useQuery(["available"], () =>
    fetch(`https://bicycle-odyssey.herokuapp.com/parts/${_id}`).then((res) =>
      res.json()
    )
  );
  const { register,formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data) {
      const order = { ...data, price: part.price };
      fetch("https://bicycle-odyssey.herokuapp.com/ordered", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Added to cart, Successfully");
            reset();
            refetch();
            navigate('/dashboard/myOrder')
          }
        });
    } else {
      toast.error("Added to cart, Failed");
    }
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
          className="grid grid-cols-1 pt-2.5 justify-items-center gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Product Name"
            className="input input-bordered  w-full max-w-md"
            defaultValue={part.productName}
            {...register("partName", { required: true })}
          />
          <input
            placeholder="Full Name"
            className="input input-bordered  w-full max-w-md"
            defaultValue={user.displayName}
            {...register("userName", { required: true })}
          />
          <input
            className="input input-bordered  w-full max-w-md"
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          <input
            placeholder="Address"
            className="input input-bordered  w-full max-w-md"
            {...register("address", { required: true })}
          />
          <input
            placeholder="Phone Number"
            className="input input-bordered  w-full max-w-md"
            {...register("number", { required: true })}
          />
          <input
            placeholder="Order Quantity"
            defaultValue={part.order}
            className="input input-bordered  w-full max-w-md"
            type="number"
            {...register("orderQuantity", {
              min: part.order,
              max: part.quantity,
            })}
          />
          {errors.orderQuantity && "Invalid Quantity"}
          <input
            className="btn w-full max-w-md btn-accent"
            value="Add to Cart"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
