import React, { useEffect, useState } from "react";
import { MdClose, MdOutlineChat, MdShoppingCart } from "react-icons/md";
import { BsFillBagCheckFill, BsBagCheck } from "react-icons/bs";
import { productData } from "../../static";
import {
  FaMinusCircle,
  FaPlus,
  FaTrash,
  FaWindowMinimize,
} from "react-icons/fa";

const SingleCardItem = ({
  RemoveFromCart,
  item,
  item: { price, name, image, discount_price },
}) => {
  const [Value, setValue] = useState(1);
  const cartprice = price * Value;
  return (
    <div className="p-2 border-b-2 items-center grid grid-cols-[50px_1fr_30px]  justify-between">
      <div className="flex flex-col gap-2 px-2">
        <div
          onClick={() => setValue(Value + 1)}
          className=" cursor-pointer bg-[red] p-1 h-[25px] w-[25px]  text-white flex items-center justify-center rounded-full"
        >
          <FaPlus size={25} />
        </div>
        <div className="text-bold text-xl  p-1 h-[25px] w-[25px] text-bold flex items-center justify-center rounded-full">
          {Value}
        </div>
        <div
          onClick={() => {
            if (Value > 1) {
              setValue(Value - 1);
            }
          }}
          className=" cursor-pointer p-1 h-[25px] w-[25px] flex items-center justify-center rounded-full"
        >
          <FaMinusCircle size={25} />
        </div>
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
          <div className="bold">
            <span className="text-[red]">{Value} </span> *{" "}
            {price ? price : discount_price}
            {" $"} ={cartprice ? cartprice : discount_price * Value} {"$"}
          </div>
        </div>
      </div>
      <div
        onClick={() => RemoveFromCart(item)}
        className="bg-[red] text-white cursor-pointer p-1 h-[25px] w-[25px] flex items-center justify-center rounded-full"
      >
        <FaTrash size={15} />
      </div>
    </div>
  );
};

export default SingleCardItem;
