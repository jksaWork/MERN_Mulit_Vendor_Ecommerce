import React from "react";
import RatingStarts from "./RatingStarts";
import { BiCartAlt, BiHeart } from "react-icons/bi";

function ProductCard({
  data: { image_Url, name, shop, discount_price, price, rating, total_sell },
}) {
  console.log(image_Url, name);
  return (
    <div className="card  bg-base-100 shadow-xl relative">
      <figure>
        <img
          src={image_Url[0].url}
          alt="Shoes"
          className="h-[200px] object-contain "
        />
      </figure>
      <div className="card-body">
        <h3 className="text-blue font-bold capitalize">{shop.name}</h3>
        <h2 className="card-title">
          {name.length < 50 ? name : name.slice(0, 50) + "..."}
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
        <div className="absolute top-0 right-5">
          <div className="flex flex-col gap-1">
            <span>
              <BiHeart size={30} />
            </span>
            <span>
              <BiCartAlt size={30} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
