import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import ManageOrderTable from "./ManageOrderTable";

const ManageAllOrders = () => {
  const {
    isLoading,
    data: ordered,
    refetch,
  } = useQuery(["orderd"], () =>
    fetch(`http://localhost:5000/ordered`).then((res) => res.json())
  );
  if(isLoading){
      return <Loading />
  }
  return (
    <div className='m-5'>
    <h1 className="text-4xl font-extrabold text-bold text-center">
      Manage All Orders
    </h1>
   
    <table className="table mt-5  w-full">
      {/* <!-- head --> */}
      <thead>
        <tr>
          <th></th>
          <th>User Email</th>
          <th>Parts Name</th>
          <th>Ordered Quantity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {ordered.map((item, index) => (
        <ManageOrderTable key={item._id} refetch={refetch}  index={index} item={item}></ManageOrderTable>
      ))}
      </tbody>
    </table>
   
  </div>
  );
};

export default ManageAllOrders;
