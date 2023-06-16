import React, { useState } from "react";
import { MdKeyboardArrowUp, MdFilterList } from "react-icons/md";
import { categoriesData } from "../../static";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { BiBorderRadius } from "react-icons/bi";

function CategoriesSection() {
  const [Active, setActive] = useState();

  return (
    <div className="container px-10">
      {/* Categoriess Section */}
      <div
        style={{ borderRadius: "10px 10px 0 0 ", lineHeight: "50px" }}
        className={`
       relative z-[2] bg-white hidden md:block w-[300px] cursor-pointer pt-1  min-h-[50px]
       
       ${Active ? "h-auto shadow-md" : ""}
       `}
        onClick={() => setActive(!Active)}
      >
        <div className="flex justify-around items-center">
          <span>
            <MdFilterList size={30} />
          </span>
          <span className="text-2xl  font-sans">Categories</span>
          <span
            className={` ${
              !Active ? "rotate-[180deg]" : "mt"
            } transition-all duration-[500ms] `}
          >
            <MdKeyboardArrowUp size={30} />
          </span>
        </div>
        {Active &&
          categoriesData.map((el, index) => {
            let product_name = el.title.replace(/s+/, "-");
            console.log(el);
            return (
              <Link
                key={el.id + Math.random() + index}
                to={`products/${product_name}`}
              >
                <div className="flex border-b-2 border-gray-100   p-1 px-3  items-center bordor-bottom gap-2">
                  <img src={el.image_Url} className="w-[40px]" />
                  <h3 className="text-md">{el.title}</h3>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default CategoriesSection;
