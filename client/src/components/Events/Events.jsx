import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles";
import EventCard from "./EventCard";
import { allEvents } from "../../static";

const Events = () => {
  // const { allEvents, isLoading } = useSelector((state) => state.events);

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
