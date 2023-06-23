import React from "react";
import styles from "../styles";
import { ShopInfo, ShopProductAndEvents } from "../components/index";
function ShowShop() {
  const shop = {
    name: "Example Shop",
    image:
      "https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo-500x313.png",
    product_count: 25,
    phoneNumber: "0915477450",
    rating: 3.5,
    joinedOn: "2023-03-6",
    address: "213 Khartom, AlSuque Arabic",
  };
  return (
    <div className="bg-[#f5f5f5] h-screen">
      <div className={`${styles.section} pt-3`}>
        <div className="w-full md:grid gap-4 grid-cols-[400px_1fr]">
          <ShopInfo shop={shop} />
          <ShopProductAndEvents />
        </div>
      </div>
    </div>
  );
}

export default ShowShop;
