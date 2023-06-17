import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import { Header, Loader } from "../components";
import { allEvents } from "../static";
// import Header from "../components/Layout/Header";
// import Loader from "../components/Layout/Loader";
const EventsPage = () => {
  //   const { allEvents, isLoading } = useSelector((state) => state.events);
  const isLoading = false;
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div className="p-5">
            <EventCard active={true} data={allEvents && allEvents[0]} />
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
