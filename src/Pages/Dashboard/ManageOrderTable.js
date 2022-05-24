import React from "react";
import { toast } from "react-toastify";

const ManageOrderTable = ({ item, index, refetch }) => {
  const { _id, partName, email, orderQuantity, payment } = item;
  const handleDelete = () => {
    const url = `http://localhost:5000/ordered/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast(`Deleted ${partName} Order`);
          refetch();
        }
      });
  };
  const handleDeliver = () => {};
  return (
    <tr key={_id}>
      <th>{index + 1}</th>
      <th>{email}</th>

      <th>{partName}</th>
      <th>{orderQuantity}</th>
      <th>
        {payment ? (
          <>
            <span className='mr-2'>Paid</span>
            <button
              onClick={() => handleDeliver(_id)}
              className="btn btn-success btn-xs"
            >
              Deliver Order
            </button>
          </>
        ) : (
          <>
            <span className='mr-2'>Not Paid</span>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-success btn-xs"
            >
              Delete Order
            </button>
          </>
        )}
      </th>
    </tr>
  );
};

export default ManageOrderTable;
