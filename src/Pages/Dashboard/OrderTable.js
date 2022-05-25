import React from "react";

const OrderTable = ({ item, index, setDeleteOrder }) => {
  const { partName, price, orderQuantity, email } = item;

  return (
    <tr key={item._id}>
      <th>{index + 1}</th>
      <th>{partName}</th>
      <th>{price}</th>
      <th>{orderQuantity}</th>
      <th>
        {email ? (
          <label
            for="deleteModalConfirm"
            onClick={() => setDeleteOrder(item)}
            className="btn btn-success btn-xs"
          >
            Delete Order
          </label>
        ) : (
          "Paid"
        )}
      </th>
    </tr>
  );
};

export default OrderTable;
