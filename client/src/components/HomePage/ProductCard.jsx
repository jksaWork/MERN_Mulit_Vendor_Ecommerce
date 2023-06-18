import React, { useState } from "react";
import RatingStarts from "./RatingStarts";
import { BiCartAlt, BiHeart } from "react-icons/bi";
import ProductDetails from "./ProductDetails";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

function ProductCard({
  data: { image_Url, name, shop, discount_price, price, rating, total_sell },
  data,
}) {
  const [OpenDetailsModal, setOpenDetailsModal] = useState(false);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl relative">
        <figure>
          <Link to={`/product/${name.replace(" ", "-")}`}>
            <img
              src={image_Url[0].url}
              alt="Shoes"
              className="h-[200px] object-contain p-1"
            />
          </Link>
        </figure>
        <div className="card-body">
          <h3 className="text-blue font-bold capitalize">{shop.name}</h3>
          <h2 className="card-title">
            <Link to={`/product/${name.replaceAll(" ", "-")}`}>
              {name.length < 50 ? name : name.slice(0, 50) + "..."}
            </Link>
          </h2>
          <p>
            <RatingStarts starts={rating} />
          </p>
          <div className="flex justify-between">
            <div className="flex flex-start gap-1">
              <div class="font-bold text-xl ">
                {discount_price != 0 ? discount_price : price} $
              </div>
              {discount_price != 0 && (
                <div class="font-bold text-sm  line-through text-[red]">
                  $ {price}
                </div>
              )}
            </div>
            <div classsName="text-primary">23 sold</div>
          </div>
          <div className="absolute top-2  z-[2] right-5">
            <div className="flex flex-col gap-1 cursor-poniter z-[2] ">
              <span>
                <BiHeart size={30} />
              </span>
              <span>
                <BiCartAlt size={30} />
              </span>

              <span
                class="cursor-pointer"
                onClick={() => setOpenDetailsModal(!OpenDetailsModal)}
              >
                <MdRemoveRedEye size={30} />
              </span>
              {/* Open the modal using ID.showModal() method */}
            </div>
          </div>
        </div>
      </div>
      {OpenDetailsModal && (
        <ProductDetails
          product={data}
          setOpenDetailsModal={setOpenDetailsModal}
        />
      )}
    </div>
  );
}

export default ProductCard;
