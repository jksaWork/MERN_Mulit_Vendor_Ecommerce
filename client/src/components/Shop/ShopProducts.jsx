import React from "react";
import { productData } from "../../static";
import ProductCard from "../HomePage/ProductCard";

function ShopProducts() {
  const allProducts = productData;
  return (
    <div class="bg-white mt-10">
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 items-streach md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-3 xl:gap-[30px] mb-12 border-0">
        {allProducts && allProducts.length !== 0 && (
          <>
            {allProducts &&
              allProducts.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ShopProducts;
