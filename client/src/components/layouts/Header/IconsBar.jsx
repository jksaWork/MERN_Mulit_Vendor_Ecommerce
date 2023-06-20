import React, { useState } from "react";
import { BiHeart, BiCartAlt, BiUserCheck } from "react-icons/bi";
import { CartComponent, WishListComponent } from "../../index";
import SingleWhislistItem from "../../WishListComponent/SingleWhislistItem";
import { useSelector } from "react-redux";
import { FaUserCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { server } from "../../../static";
import { AiOutlineUser } from "react-icons/ai";
function IconsBar() {
  const [OpenCard, setOpenCard] = useState(false);
  const [OpenWhishlist, setOpenWhishlist] = useState(false);
  const { isAuthenticated, user } = useSelector((store) => store.usersReducer);
  return (
    <div className="flex gap-5 ">
      <div
        className="relative cursor-pointer"
        onClick={() => {
          setOpenWhishlist(true);
        }}
      >
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
      <Link
        className="relative"
        to={`${isAuthenticated ? "/profile" : "/login"}`}
      >
        {isAuthenticated ? (
          <div>
            <img
              src={`${server.replace("/api", "")}/${user.avatar}`}
              className="w-[30px] h-[30px] rounded-full"
            />
          </div>
        ) : (
          <AiOutlineUser size={30} color="#fff" />
        )}
      </Link>

      {OpenCard && <CartComponent setOpenCard={setOpenCard} />}
      {OpenWhishlist && (
        <WishListComponent setOpenWhishlist={setOpenWhishlist} />
      )}
    </div>
  );
}

export default IconsBar;
