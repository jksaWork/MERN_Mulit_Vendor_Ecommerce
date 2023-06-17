import React from "react";
import { BiHeart } from "react-icons/bi";
import { MdClose, MdOutlineChat, MdShoppingCart } from "react-icons/md";
function ProductDetails({
  setOpenDetailsModal,
  product: {
    image_Url,
    name,
    description,
    shop,
    discount_price,
    price,
    rating,
    total_sell,
  },
}) {
  console.log(image_Url);
  return (
    <div>
      <div className="fixed shadow-md bg-white  top-[50%] left-[50%] z-[2] max-w-[90%] min-w-[80%] min-h-[60vh]  max-h-[95vh] overflow-hidden card translate-x-[-50%]  translate-y-[-50%]">
        {/* Hello World */}
        <div className="flex flex-col justify-between h-[500px]">
          <div className="border-b-2 p-2">
            <div className="flex justify-between items-center">
              <span className="text-2xl">Product Details </span>
              <span
                className="cursor-pointer"
                onClick={() => setOpenDetailsModal(false)}
              >
                <MdClose size={25} />{" "}
              </span>
            </div>
          </div>
          {/* Boady */}
          <div className="max-h-[500px] " style={{ overflowY: "scroll" }}>
            <div className="flex justify-center">
              <div className="w-1/2 px-10">
                {/* Image COntainer */}
                <div>
                  <img src={image_Url[0].url} className="max-w-[300px]" />{" "}
                </div>
                {/* Shop Container */}
                <div className="flex justify-start gap-2">
                  <div>
                    <img
                      src={shop.shop_avatar.url}
                      className="w-[70px] h-[70px] rounded-full"
                    />{" "}
                  </div>
                  <div>
                    <div className="text-xl">{shop.name}</div>
                    <div className="text-sm">{`(${shop.ratings}) Ratings`}</div>
                  </div>
                </div>
                <div>
                  <span className="btn bg-black text-white rounded-lg mt-2">
                    Send Message <MdOutlineChat />
                  </span>
                </div>
              </div>
              <div className="w-1/2 p-3">
                <div className="text-3xl font-bold">{name}</div>
                <div className="text-md m-2">{description}</div>
                <div className="flex justify-start">
                  {/* price */}
                  <div class="text-2xl font-bold">{price + "$"}</div>
                  {/* dicount */}
                </div>
                <div className="flex justify-between px-3 mt-3 ">
                  <span class="flex flex-center max-w-[100px]">
                    <span className="span bg-main p-2 px-4 rounded-sm text-white">
                      +
                    </span>

                    <input
                      type="text"
                      class="w-[30px] text-black p-3 bg-gray"
                    />
                    <span className="span bg-main p-2 px-4 rounded-sm text-white">
                      -
                    </span>
                  </span>
                  <span class="cursor-pointer">
                    <BiHeart size={30} />
                  </span>
                </div>
                <div>
                  <span className="btn bg-black mt-3 text-white rounded-lg ">
                    Add To Card <MdShoppingCart />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* End Body */}
          <div className="border-t-2 p-2">
            <button
              className="btn btn-sm"
              onClick={() => setOpenDetailsModal(false)}
            >
              Close
            </button>
          </div>
        </div>
        {/* Hi Jksaa */}
      </div>
    </div>
  );
}

export default ProductDetails;
