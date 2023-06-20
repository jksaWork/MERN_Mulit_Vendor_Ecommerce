import React from "react";
import { HashLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <HashLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;
