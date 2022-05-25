import React from "react";

const ManageOrderTable = ({ item, index, setDeleteOrder }) => {
  const { _id, partName, email, orderQuantity, payment } = item;
  
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
