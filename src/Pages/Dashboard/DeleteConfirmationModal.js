import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmationModal = ({deleteOrder, refetch, setDeleteOrder}) => {
    const { _id, partName } = deleteOrder;
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
              setDeleteOrder(null)
            }
          });
      };
  return (
    <div>
      <input type="checkbox" id="deleteModalConfirm" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Wanted to delete {partName}
          </h3>
         
          <div class="modal-action">
            <label onClick={()=>handleDelete(_id)} for="deleteModalConfirm" class="btn btn-error">
              Delete
            </label>
            <label for="deleteModalConfirm" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
