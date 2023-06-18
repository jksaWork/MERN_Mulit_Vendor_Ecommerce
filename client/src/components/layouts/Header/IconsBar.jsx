import React, { useState } from "react";
import { BiHeart, BiCartAlt, BiUserCheck } from "react-icons/bi";
import { CartComponent } from "../../index";
function IconsBar() {
  const [OpenCard, setOpenCard] = useState(true);
  return (
    <div className="flex gap-5 ">
      <div className="relative">
        <span
          className="bg-[red] px-1 rounded-2xl absolute top-[-5px] right-[-5px]
        text-white text-xs"
        >
          2
        </span>
        <BiHeart size={30} color="#fff" />
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => {
          setOpenCard(true);
        }}
      >
        <span
          className="bg-[red] px-1 rounded-2xl absolute top-[-5px] right-[-5px]
        text-white text-xs"
        >
          2
        </span>
        <div>
          <BiCartAlt size={30} color="#fff" />
        </div>
      </div>
      <div className="relative">
        <BiUserCheck size={30} color="#fff" />
      </div>

      {OpenCard && <CartComponent setOpenCard={setOpenCard} />}
    </div>
  );
}

export default IconsBar;
