import React from "react";
import { deleteAxios } from "../../api/adminApi";

function DeleteModal({ orderId }) {
  const onDeleteVoucher = async () => {
    await deleteAxios("order", {
      data: {
        orderId: parseInt(orderId),
      },
    });
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <div className="modal fade mt-5" id="deleteModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="row justify-content-end py-3 px-4">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body text-center pt-0">
              <div className="vstack mx-auto">
                <div>
                  <img
                    height="150px"
                    className="delete-img mb-4"
                    src={require("../../assets/images/close.png")}
                    alt="close button"
                  />
                </div>
                <p className="fs-2">Are you sure?</p>
                <p className="px-5 mb-5">
                  Do you really want to delete this record? This process cannot
                  be undone.
                </p>
                <div className="hstack mx-auto gap-3 mb-4">
                  <button
                    type="button"
                    className="btn btn-light px-4"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger px-4"
                    data-bs-dismiss="modal"
                    onClick={onDeleteVoucher}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DeleteModal;
