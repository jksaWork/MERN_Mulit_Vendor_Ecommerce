import React from "react";
import { useSelector } from "react-redux";
import { server } from "../../static";
import { AiOutlineBell } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";
function DashBoardHeader() {
  const { shop } = useSelector((s) => s.shop);
  // console.log(shop);
  return (
    <div className="flex justify-between items-center">
      {/* Hello World 2 */}
      <div className="shadow-lg flex w-full h-[70px] items-center gap-4  justify-end px-3">
        <span className="cursor-pointer">
          <AiOutlineBell size={30} />
        </span>
        <span className="px-2 cursor-pointer">
          <IoIosChatboxes size={30} />
        </span>
        <div className="  flex gap-2 p-1 items-center cursor-pointer">
          <h2 className="text-lg font-bold">{shop?.name}</h2>
          <img
            src={`${server.replace("/api", "") + "/" + shop?.avatar}`}
            alt="Logo"
            className="rounded-full w-[50px] h-[50px]"
          />
        </div>
      </div>
      {/* Icons Center */}
    </div>
  );
}

export default DashBoardHeader;
