import React, { useState } from "react";
import { BsEyeSlash, BsFillPenFill, BsTrash2 } from "react-icons/bs";
import ProductDetails from "../../HomePage/ProductDetails";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../../redux/actions/ProductsAction";
import ConfirmDelete from "../../../utils/ConfirmDelete";
function ProductTablepption({ data }) {
  const [OpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  console.log(data);
  // ConfirmDeleteOption
  return (
    <div>
      <div className="flex gap-2">
        <span
          onClick={() => ConfirmDelete(dispatch, deleteProductAction, data._id)}
          className="w-[30px] h-[30px] items-center cursor-pointer text-white  rounded-md flex justify-center"
        >
          <BsTrash2 size={20} color="red" />
        </span>
        <span
          onClick={() => setOpenModal(!OpenModal)}
          className="w-[30px] h-[30px]  cursor-pointer items-center text-white rounded-md flex justify-center"
        >
          <BsEyeSlash size={20} color="black" />
        </span>
      </div>
      {OpenModal && (
        <ProductDetails product={data} setOpenDetailsModal={setOpenModal} />
      )}
    </div>
  );
}

export default ProductTablepption;
