import { FaUser, FaShoppingBag, FaShare } from "react-icons/fa";
import {
  MdEmail,
  MdOutlineAddReaction,
  MdOutlineTrackChanges,
  MdPivotTableChart,
  MdPowerSettingsNew,
  MdPersonOutline,
  MdOutlineShop2,
  MdStairs,
} from "react-icons/md";

export const settingMenu = [
  {
    icon: MdPersonOutline,
    name: "profile",
  },

  {
    icon: MdOutlineShop2,
    name: "orders",
  },

  {
    icon: FaShare,
    name: "refunds",
  },
  {
    icon: MdEmail,
    name: "inbox",
  },

  {
    icon: MdOutlineTrackChanges,
    name: "track orders",
  },
  {
    icon: MdPivotTableChart,
    name: "Payment Method",
  },
  {
    icon: MdOutlineAddReaction,
    name: "Adress",
  },
  {
    icon: MdPowerSettingsNew,
    name: "logout",
  },
];
