import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({ links }) {
  return (
    <div className="p-1 bg-white px-3 rounded-md mb-5">
      <div className="text-lg breadcrumbs">
        <ul>
          {links.map((el, i) => {
            return (
              <li key={i + "-" + Math.random()}>
                <Link to={el.route} className="capitalize">
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
