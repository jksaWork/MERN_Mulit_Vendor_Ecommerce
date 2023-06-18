import React from "react";
import { BiStar } from "react-icons/bi";
import { MdOutlineStarPurple500 } from "react-icons/md";

function RatingStarts({ starts }) {
  let starts_icons = [];
  for (let i = 0; i < 5; i++) {
    starts_icons.push(
      i < starts ? (
        <MdOutlineStarPurple500 size={20} color="yellow" />
      ) : (
        <BiStar size={20} color="yellow" />
      )
    );
  }
  return <div class="flex gap-1">{...starts_icons}</div>;
}

export default RatingStarts;
