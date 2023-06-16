import React from "react";
import { BiHeart, BiCartAlt, BiUserCheck } from "react-icons/bi";
function IconsBar() {
  return (
    <div className="flex gap-5 cursor-pointer">
      <div className="relative">
        <span
          className="bg-[red] w-[12px] h-[12px] rounded-2xl absolute top-[-5px] right-[-5px]
        "
        ></span>
        <BiHeart size={30} color="#fff" />
      </div>
      <div className="relative">
        <span
          className="bg-[red] w-[12px] h-[12px] rounded-2xl absolute top-[-5px] right-[-5px]
        "
        ></span>
        <BiCartAlt size={30} color="#fff" />
      </div>
      <div className="relative">
        <BiUserCheck size={30} color="#fff" />
      </div>
    </div>
  );
}

export default IconsBar;
