import React from "react";
import EventCard from "../Events/EventCard";
import { allEvents } from "../../static";

function ShopActiveEvents() {
  return (
    <div className="mt-3">
      <EventCard active={true} data={allEvents && allEvents[0]} />
    </div>
  );
}

export default ShopActiveEvents;
