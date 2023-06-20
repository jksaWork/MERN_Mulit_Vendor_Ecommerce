import React from "react";
import { navItems } from "../../../static";
import { Link, useNavigate } from "react-router-dom";
function MobilePages({ active, setOpenNav }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-start mt-10 justify-between flex-col w-full  md:w-auto md:order-1">
        {navItems &&
          navItems.map((i, index) => (
            <div className="flex" key={i.url + index}>
              <Link
                onClick={() => {
                  console.log("Hello", "From Side Bar");
                  navigate(i.url);
                  setOpenNav(false);
                }}
                // to={i.url}
                className={`${
                  active === index + 1
                    ? "text-[#17dd1f]"
                    : "text-black 800px:text-[#fff]"
                } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
              >
                {i.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MobilePages;
