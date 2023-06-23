import React, { useState } from "react";
import { dashboardSideBarItems } from "../../static/settings";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
function DasahBoardSideBar() {
  return (
    <div className="w-full shadow-xl h-screen">
      <div className="w-full flex justify-center h-[70px] items-center">
        <img
          src="https://shopo.quomodothemes.website/assets/images/logo.svg"
          alt="Logo"
        />
      </div>
      <div className="mt-3">
        <div className="flex flex-col">
          {dashboardSideBarItems.map((el, i) => {
            return !el.has_items ? (
              <SingleMeun el={el} key={i} />
            ) : (
              <MenuWithItems el={el} key={i} />
            );
            return;
          })}
        </div>
      </div>
    </div>
  );
}

const MenuWithItems = ({ el }) => {
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpen(!Open)}
        className="flex items-center relative gap-5 px-7 mt-1  cursor-pointer hover:bg-gray-300 py-3 active:bg-gray-300"
      >
        <span>
          <el.icon size={30} />
        </span>
        <span className="text-2xl font-[400] capitalize text-gray-700">
          {el.name}
        </span>
        <span
          className={`absolute transition-all  top-[50%] translate-y-[-50%] right-2 
          ${Open ? "rotate-180" : ""}
        `}
        >
          {" "}
          <MdKeyboardArrowUp size={25} />{" "}
        </span>
      </div>
      <div
        className={`px-10 overflow-hidden ease-linear transition-all duration-500  cursor-pointer bg-gray-200
        ${Open ? "h-auto py-2 " : "h-0 "}
        `}
      >
        {el.links.map((el, i) => (
          <Link to={el.route} key={i + "-" + el.route}>
            <div className="text-xl py-1 capitalize"> {el.name} </div>
          </Link>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
const SingleMeun = ({ el }) => {
  //   console.log(item);
  return (
    <div className="flex items-center gap-5 px-7 mt-1  cursor-pointer hover:bg-gray-300 py-3 active:bg-gray-300">
      <span>
        <el.icon size={25} />
      </span>
      <span className="text-xl font-[400] capitalize text-gray-700">
        {el.name}
      </span>
    </div>
  );
};

export default DasahBoardSideBar;
