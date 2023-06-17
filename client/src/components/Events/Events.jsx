import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles";
import EventCard from "./EventCard";

const Events = () => {
  // const { allEvents, isLoading } = useSelector((state) => state.events);
  const allEvents = [
    {
      id: 1,
      category: "Computers and Laptops",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      images: [
        "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      ],
      shop: {
        name: "Apple inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      originalPrice: 1099,
      discountPrice: 1049,
      rating: 4,
      total_sell: 35,
      stock: 10,
    },
  ];
  return (
    <div>
      {!false && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>

          <div className="w-full grid">
            {allEvents.length !== 0 && (
              <EventCard data={allEvents && allEvents[0]} />
            )}
            <h4>{allEvents?.length === 0 && "No Events have!"}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
