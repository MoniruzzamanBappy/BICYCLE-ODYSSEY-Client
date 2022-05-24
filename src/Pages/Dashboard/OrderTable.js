import React from "react";
import { toast } from "react-toastify";

const OrderTable = ({ item, index, refetch }) => {
  const { partName, price, orderQuantity, email, _id } = item;
  const handleDelete = (_id) => {
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
  return (
    <tr key={item._id}>
      <th>{index + 1}</th>
      <th>{partName}</th>
      <th>{price}</th>
      <th>{orderQuantity}</th>
      <th>
        {email ? (
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-success btn-xs"
          >
            Delete Order
          </button>
        ) : (
          "Paid"
        )}
      </th>
    </tr>
  );
};

export default OrderTable;
