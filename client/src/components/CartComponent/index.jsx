import React, { useEffect, useState } from "react";
import { MdClose, MdOutlineChat, MdShoppingCart } from "react-icons/md";
import { BsFillBagCheckFill, BsBagCheck } from "react-icons/bs";
import { productData } from "../../static";
import { FaPlus, FaWindowMinimize } from "react-icons/fa";
import SingleCardItem from "./SingleCardItem";
function CartComponent({ setOpenCard }) {
  let cartData = productData
    .slice(0, 5)
    .map(({ discount_price, name, price, image_Url }) => {
      return {
        discount_price,
        name,
        price,
        image: image_Url[0].url,
      };
    });
  const RemoveFromCart = (element) => cartData.filter((el) => el != element);

  return (
    <div className="bg-black flex justify-end  z-[10] bg-opacity-60 fixed top-0 left-0 w-full h-screen">
      {/* Heelo Wolrd */}
      <div className="w-[350px] bg-white flex justify-between flex-col">
        {/* Card Header  */}
        <div className="flex justify-between p-3 border-b-2 ">
          <div>
            <span className="text-xl gap-3 font-bold capitalize flex items-center">
              <BsBagCheck size={30} />
              Items 5{" "}
            </span>
          </div>
          <span className="cursor-pointer" onClick={() => setOpenCard(false)}>
            <MdClose size={30} />
          </span>
        </div>

        <div className="pt-3 flex  flex-col h-[83vh] overflow-scroll">
          {cartData.length > 0 &&
            cartData.map((el, i) => (
              <SingleCardItem
                item={el}
                key={el.name + i}
                RemoveFromCart={RemoveFromCart}
              />
            ))}
          {/* Hello World */}
        </div>

        <div class="px-2">
          <button className="bg-[red] p-2  w-full capitalize text-xl text-white">
            {/* Hi */}
            Check Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
