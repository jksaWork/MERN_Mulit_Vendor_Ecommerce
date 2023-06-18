import React, { useEffect, useState } from "react";
import { MdClose, MdOutlineChat, MdShoppingCart } from "react-icons/md";
import { BsFillBagCheckFill, BsBagCheck } from "react-icons/bs";
import { productData } from "../../static";
import {
  FaMinusCircle,
  FaOpencart,
  FaPlus,
  FaTrash,
  FaWindowMinimize,
} from "react-icons/fa";

const SingleWhislistItem = ({
  RemoveFromCart,
  item,
  item: { price, name, image, discount_price },
}) => {
  console.log(RemoveFromCart);

  console.log(image, item, "Items Center ");
  return (
    <div className="p-2 border-b-2 items-center grid grid-cols-[30px_1fr_50px]  justify-between">
      <div
        onClick={() => RemoveFromCart(item)}
        className=" text-white cursor-pointer p-1 h-[25px] w-[25px] flex items-center justify-center rounded-full"
      >
        <FaTrash size={15} color="red" />
      </div>
      <div className="flex items-center gap-2">
        {/* Image */}
        <div>
          <img src={image} className="w-[100px] h-[100px] object-contain" />
        </div>
        <div>
          <h2 className="text-md font-bold">
            {name.length < 50 ? name : name.slice(0, 30) + "..."}
          </h2>
        </div>
      </div>
      <div
        onClick={() => RemoveFromCart(item)}
        className=" cursor-pointer p-1 h-[25px] w-[25px] flex items-center justify-center rounded-full"
      >
        <FaOpencart size={35} />
      </div>
    </div>
  );
};

export default SingleWhislistItem;
