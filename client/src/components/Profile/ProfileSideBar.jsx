import React from "react";
import { settingMenu } from "../../static/settings";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../redux/actions/usersAction";
import { useNavigate, useNavigation } from "react-router-dom";

function ProfileSideBar({ ActivePage, setActivePage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandelPageViewer = (page) => {
    if (settingMenu[page - 1].name != "logout") return setActivePage(page);
    dispatch(userLogOut(navigate)).then((el) => {
      console.log(el);
    });
  };
  return (
    <div
      className="pt-10 p-4 bg-white shadow-lg 
    "
    >
      {settingMenu.map((el, i) => (
        <div
          onClick={() => HandelPageViewer(i + 1)}
          className={`flex items-center p-2 gap-5 mt-1 cursor-pointer ${
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
