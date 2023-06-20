import React from "react";
import { BiHeart } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import SerachComponent from "./SerachComponent";
import MobilePages from "./MobilePages";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function MobileSideBar({ setOpenNav }) {
  const { isAuthenticated } = useSelector((s) => s.usersReducer);
  console.log(isAuthenticated, "isAuthenticated");
  return (
    <div className="bg-black flex justify-start  z-[10] bg-opacity-60 fixed top-0 left-0 w-full h-screen">
      {/* Heelo Wolrd */}
      <div className="md:w-[350px] w-[250px] bg-white flex  flex-col">
        {/* Card Header  */}
        <div className="bg-white grid  h-screen grid-cols-[250px] md:grid-cols-[350px] grid-rows-[auto_1fr_40px]">
          <div className="flex justify-between p-3 border-b-2 ">
            <div className="flex gap-3">
              <div className="relative cursor-pointer">
                <span
                  className="bg-[red] px-1 rounded-2xl absolute top-[-5px] right-[-5px]
        text-white text-xs"
                >
                  2
                </span>
                <BiHeart size={30} />
              </div>
              <Link
                className="relative"
                to={`${isAuthenticated == true ? "/profile" : "/login"}`}
              >
                {isAuthenticated == true ? (
                  <div>
                    <img
                      src={`${server.replace("/api", "")}/${user.avatar}`}
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </div>
                ) : (
                  <AiOutlineUser size={30} />
                )}
              </Link>
            </div>
            <span className="cursor-pointer" onClick={() => setOpenNav(false)}>
              <MdClose size={30} />
            </span>
          </div>
          <div>
            <div className="mt-5 flex justify-center">
              <SerachComponent nameSize={20} />
            </div>
            <MobilePages setOpenNav={setOpenNav} />
          </div>
          <div className="border-t-2 text-center ">
            copyright &copy; jksaAltigani 2023
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSideBar;
