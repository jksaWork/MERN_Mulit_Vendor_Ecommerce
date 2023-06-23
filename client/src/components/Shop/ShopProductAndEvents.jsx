import React, { useState } from "react";
import ShopProducts from "./ShopProducts";
import ShopActiveEvents from "./ShopActiveEvents";
function ShopProductAndEvents() {
  const [ActivePage, setActivePage] = useState(1);
  return (
    <div>
      <div className="p-1 bg-white rounded-md">
        <div className="tabs">
          <a
            onClick={() => setActivePage(1)}
            className={`tab tab-lg   text-2xl ${
              ActivePage == 1 ? "tab-active" : ""
            }`}
          >
            {" "}
            Products{" "}
          </a>
          <a
            className={`tab tab-lg   text-2xl ${
              ActivePage == 2 ? "tab-active" : ""
            }`}
            onClick={() => setActivePage(2)}
          >
            {" "}
            Active Events{" "}
          </a>
          <a
            onClick={() => setActivePage(3)}
            className={`tab tab-lg   text-2xl ${
              ActivePage == 3 ? "tab-active" : ""
            }`}
          >
            {" "}
            Shop Reviwes{" "}
          </a>
        </div>
        <div className="px-2">
          {ActivePage == 1 && <ShopProducts />}
          {ActivePage == 2 && <ShopActiveEvents />}
        </div>
      </div>
    </div>
  );
}

export default ShopProductAndEvents;
