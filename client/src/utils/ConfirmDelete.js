import Swal from "sweetalert2";
const ConfirmDeleteOption = (dispatch, deleteProductAction, id) => {
  Swal.fire({
    title: "Do you want to Delete The Element  ?",
    showCancelButton: true,
    confirmButtonText: "Delete",
    confirmButton: "btn btn-danger",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      dispatch(deleteProductAction(id))
        .then(() => Swal.fire("Item Delete Scceuess!", "", "success"))
        .catch((e) => Swal.fire(e.message, "", "error"));
    }
  });
};

export default ConfirmDeleteOption;
