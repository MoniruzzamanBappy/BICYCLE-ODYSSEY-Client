import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ManageOrderTable = ({ item, index,refetch, setDeleteOrder }) => {
  const { _id, partName, email, orderQuantity, paid, deliveredText } = item;

  const [delivertext, setDelivertext] = useState(false);

  const handleDeliver = () => {
    setDelivertext(true);
    const updateProcessing = async () => {
      const url = `https://bicycle-odyssey.herokuapp.com/parts/${_id}`;
      const { data } = await axios.put(url, { delivertext });
      if (data.acknowledged) {
        toast.success("Deliver processing, Successfully");
        refetch();
      }
    };
    updateProcessing();
  };
  return (
    <tr key={_id}>
      <th>{index + 1}</th>
      <th>{email}</th>

      <th>{partName}</th>
      <th>{orderQuantity}</th>
      <th>
        {paid ? (
          <>
            <span className="mr-2">Paid</span>
            <button
              onClick={() => handleDeliver(_id)}
              className="btn btn-success btn-xs"
            >
              {deliveredText ? "Processing" : "Deliver Order"}
            </button>
          </>
        ) : (
          <>
            <span className="mr-2">Not Paid</span>
            <label
              for="deleteModalConfirm"
              onClick={() => setDeleteOrder(item)}
              className="btn btn-success btn-xs"
            >
              Delete Order
            </label>
          </>
        )}
      </th>
    </tr>
  );
};

export default ManageOrderTable;
