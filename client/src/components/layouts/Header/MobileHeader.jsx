import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import MobileSideBar from "./MobileSideBar";

const MobileHeader = () => {
  // const { , setOpenNav } = useState(false); // Side Bar Tiger
  const [OpenNav, setOpenNav] = useState(false);
  return (
    <div className="flex justify-between md:justify-start md:gap-4">
      <span
        className="xl:hidden sm:block"
        onClick={() => {
          setOpenNav(true);
        }}
      >
        <BiMenuAltLeft size={30} />
      </span>
      <img
        src="https://shopo.quomodothemes.website/assets/images/logo.svg"
        alt=""
      />
      <span className="md:hidden sm:block">
        <AiOutlineShoppingCart size={30} />
      </span>
      {OpenNav && <MobileSideBar setOpenNav={setOpenNav} />}
    </div>
  );
};

export default MobileHeader;
