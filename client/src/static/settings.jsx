import {
  BsBookmarks,
  BsCardList,
  BsCartCheck,
  BsCartCheckFill,
  BsFillGiftFill,
  BsFillGrid1X2Fill,
  BsFillInboxesFill,
  BsGearFill,
  BsListNested,
} from "react-icons/bs";
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
  MdKeyOff,
  MdAddShoppingCart,
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
    icon: MdKeyOff,
    name: "Change Password",
  },
  {
    icon: MdPivotTableChart,
    name: "Payment Method",
  },
  {
    icon: MdOutlineAddReaction,
    name: "Address",
  },
  {
    icon: MdPowerSettingsNew,
    name: "logout",
  },
];

export const dashboardSideBarItems = [
  {
    route: "/dashboard",
    icon: BsFillGrid1X2Fill,
    name: "dashboard",
    has_items: false,
  },

  {
    route: "/shop/orders",
    icon: BsCartCheckFill,
    name: "Orders",
    has_items: false,
  },
  {
    route: "/shop/products",
    icon: BsCardList,
    name: "Products",
    has_items: true,
    links: [
      { name: "show", route: "/dashboard/products" },
      { name: "create", route: "/dashboard/product/create" },
    ],
  },
  {
    route: "/dashboard/events",
    icon: MdAddShoppingCart,
    name: "Events",
    has_items: true,
    links: [
      { name: "show", route: "/dashboard/events" },
      { name: "create", route: "/dashboard/events/create" },
    ],
  },

  {
    route: "/shop/inbox",
    icon: BsFillInboxesFill,
    name: "Shop Inbox",
    has_items: false,
  },
  {
    route: "/shop/inbox",
    icon: BsFillGiftFill,
    name: "Discount Code",
    has_items: false,
  },
  {
    route: "/shop/settings",
    icon: BsGearFill,
    name: "Settings",
    has_items: false,
  },
];
