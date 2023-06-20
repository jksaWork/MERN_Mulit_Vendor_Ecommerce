import React, { useState } from "react";
import { productData } from "../../../static";
import { MdOutlineSearch } from "react-icons/md";
// useState
import { Link } from "react-router-dom";
function SerachComponent({ nameSize = 40 }) {
  const [searchData, setSearchData] = useState();
  const [SeachTerm, setSeachTerm] = useState();

  const handelImage = (e) => {
    const val = e.target.value;
    setSeachTerm(val);
    const filteredData = productData.filter((el) => {
      return el.name.toLowerCase().includes(val.toLowerCase());
    });
    setSearchData(filteredData);
  };
  return (
    <div className=" w-[400px] max-w-[80%] relative flex-3">
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
      <div className="absolute w-full divide-y  z-[3] bg-white top-[50px] px-2 shadow-md rounded-sm">
        {SeachTerm &&
          searchData.map((el, index) => {
            let product_name = el.name.replace(/s+/, "-");
            return (
              <Link
                key={el.name + Math.random() + index}
                to={`products/${product_name}`}
              >
                <div className="flex border-b-2 border-gray-100   p-2 py-3   items-center bordor-bottom gap-2">
                  <img src={el.image_Url[0].url} className="w-[40px]" />
                  <h3 className="text-md">
                    {el.name.length > nameSize
                      ? el.name.slice(0, nameSize) + "..."
                      : el.name}
                  </h3>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default SerachComponent;
