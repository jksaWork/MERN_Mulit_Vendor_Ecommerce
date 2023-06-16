import React from "react";
import { navItems } from "../../static";
import { Link } from "react-router-dom";
function NavBar({ active }) {
  return (
    <div>
      <div class=" md:flex items-center justify-between hidden w-full  md:w-auto md:order-1">
        {navItems &&
          navItems.map((i, index) => (
            <div className="flex">
              <Link
                to={i.url}
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

export default NavBar;
