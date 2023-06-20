import React, { useState } from "react";
import { MdKeyboardArrowUp, MdFilterList } from "react-icons/md";
import { categoriesData } from "../../../static";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import CategoriesSection from "./CategoriesSection";
import IconsBar from "./IconsBar";
import styles from "../../../styles";

function Categories({ activeHeading }) {
  return (
    <div className="w-full bg-main h-[60px] hidden md:block">
      {" "}
      <div
        className={`${styles.section} hidden  md:grid xl:grid-cols-[300px_1fr_300px]
          justify-start
          md:grid-cols-[1fr_1fr]
          pt-3`}
      >
        <CategoriesSection />
        <div className="xl:flex justify-center hidden ">
          <NavBar active={activeHeading} />
        </div>

        <div className="flex justify-center">
          <IconsBar />
        </div>
      </div>
    </div>
  );
}

export default Categories;
