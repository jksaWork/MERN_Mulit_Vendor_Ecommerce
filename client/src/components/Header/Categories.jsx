import React, { useState } from "react";
import { MdKeyboardArrowUp, MdFilterList } from "react-icons/md";
import { categoriesData } from "../../static";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import CategoriesSection from "./CategoriesSection";
import IconsBar from "./IconsBar";

function Categories() {
  return (
    <div
      className="w-full bg-main h-[60px] hidden  md:grid grid-cols-[300px_1fr_300px]
          justify-start
          pt-3"
    >
      <CategoriesSection />
      <div className="flex justify-center">
        <NavBar active={2} />
      </div>

      <div className="flex justify-center">
        <IconsBar />
      </div>
    </div>
  );
}

export default Categories;
