import React, { useState } from "react";
import { MdKeyboardArrowRight, MdOutlineSearch } from "react-icons/md";
import { productData } from "../../../static";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import MobileHeader from "./MobileHeader";
import SerachComponent from "./SerachComponent";

function Header({ activeHeading }) {
  const [SeachTerm, setSeachTerm] = useState();

  return (
    <>
      <div
        className="
          md:grid xl:grid-cols-[300px_1fr_300px]
          md:grid-cols-[1fr_1fr]
          py-3 px-5 justify-between items-center"
      >
        {/* Logos */}
        <div>
          <Link to="/">
            <MobileHeader />
          </Link>
        </div>
        {/* Search Bars */}
        <div className="md:flex hidden flex-center justify-center">
          <SerachComponent />
        </div>
        {/* Become Sleere */}
        <div className="hidden xl:block">
          <div className="flex justify-end">
            <span className="rounded-md px-3  cursor-pointer flex gap-2 items-center bg-black py-3 text-xl text-white">
              Become Saller <MdKeyboardArrowRight />
            </span>
          </div>
        </div>
      </div>
      <Categories activeHeading={activeHeading} />
    </>
  );
}

export default Header;
