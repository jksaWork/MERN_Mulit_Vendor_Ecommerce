import React from "react";
import { settingMenu } from "../../static/settings";

function ProfileSideBar({ ActivePage, setActivePage }) {
  return (
    <div className="pt-10 p-4 bg-white shadow-lg  ">
      {settingMenu.map((el, i) => (
        <div
          onClick={() => setActivePage(i + 1)}
          className={`flex items-center p-3 gap-5 mt-2 cursor-pointer ${
            ActivePage == i + 1 ? "text-red-500" : ""
          }`}
        >
          <el.icon size={25} />
          <div
            className={`text-xl capitalize font-[400] hidden md:block ${
              ActivePage == i + 1 ? "text-red-500" : ""
            }`}
          >
            {el.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileSideBar;
