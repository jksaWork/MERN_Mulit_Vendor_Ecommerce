import React from "react";
import styles from "../../styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function ShopInfo({
  shop: { name, image, address, phoneNumber, joinedOn, rating, product_count },
}) {
  const { shop, isAuthenticated } = useSelector((s) => s.shop);
  const { id } = useParams();
  //   console.log();
  return (
    <div className="w-full rounded-xl bg-white">
      {/* Image Section */}
      <div className="flex justify-center items-center flex-col">
        <img src={image} className="w-[200px] h-[200px] rounded-full" />
        <div className="text-2xl font-sans">{name}</div>
      </div>
      <div className="p-10">
        <div className="mt-1">
          <div className="font-bold">Address</div>
          <div className="text-gray-500">{address}</div>
        </div>
        <div className="mt-2">
          <div className="font-bold capitalize">phone number</div>
          <div className="text-gray-500">{phoneNumber}</div>
        </div>
        <div className="mt-2">
          <div className="font-bold capitalize">total prodcut</div>
          <div className="text-gray-500">{product_count}</div>
        </div>
        <div className="mt-2">
          <div className="font-bold capitalize">Shop Rating</div>
          <div className="text-gray-500">{rating}</div>
        </div>

        <div className="mt-2">
          <div className="font-bold capitalize">Joined On</div>
          <div className="text-gray-500">{joinedOn}</div>
        </div>
        {isAuthenticated && id == shop._id && (
          <div className="mt-2 flex items-center">
            <Link
              to={`/dashboard`}
              className={` items-center flex justify-center rounded-2xl mt-10 bg-black h-[50px] w-full text-[#fff] ml-5`}
            >
              Go To Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopInfo;
