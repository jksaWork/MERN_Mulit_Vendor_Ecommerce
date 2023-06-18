import React, { useState } from "react";
import { MdKeyboardArrowRight, MdOutlineSearch } from "react-icons/md";
import { productData } from "../../../static";
import { Link } from "react-router-dom";
import Categories from "./Categories";

function Header({ activeHeading }) {
  const [SeachTerm, setSeachTerm] = useState();
  const [searchData, setSearchData] = useState();
  const handelImage = (e) => {
    const val = e.target.value;
    setSeachTerm(val);

    const filteredData = productData.filter((el) => {
      return el.name.toLowerCase().includes(val.toLowerCase());
    });
    console.log(filteredData);
    setSearchData(filteredData);
  };
  return (
    <>
      <div
        className="
          md:grid xl:grid-cols-[300px_1fr_300px]
          md:grid-cols-[1fr_1fr]
          my-3 px-5 justify-between items-center"
      >
        {/* Logos */}
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>
        </div>
        {/* Search Bars */}
        <div className="md:flex hidden flex-center justify-center">
          <div className=" w-[400px] relative flex-3">
            <input
              type="text"
              id="large-input"
              placeholder="Search"
              className="block w-full p-3 shadow-lg border-none text-gray-900 border bg-white rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
           dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handelImage}
              value={SeachTerm}
            />
            <span className="absolute cursor-pointer top-[50%] right-0 translate-y-[-50%] translate-x-[-50%]">
              <MdOutlineSearch size={30} color="#dddd" />
            </span>
            <div className="absolute w-full divide-y   bg-white top-[50px] px-2 shadow-md rounded-sm">
              {SeachTerm &&
                searchData.map((el, index) => {
                  let product_name = el.name.replace(/s+/, "-");
                  console.log(product_name);
                  return (
                    <Link
                      key={el.name + Math.random() + index}
                      to={`products/${product_name}`}
                    >
                      <div className="flex border-b-2 border-gray-100   p-2 py-3   items-center bordor-bottom gap-2">
                        <img src={el.image_Url[0].url} className="w-[40px]" />
                        <h3 className="text-md">{el.name}</h3>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
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
