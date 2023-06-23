import React from "react";
import { DashBoardHeader, DasahBoardSideBar, DashboardBody } from "./";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-[300px_1fr] justify-start">
        <DasahBoardSideBar />
        <DashboardBody children={children} />
        {/* < /> */}
      </div>
    </div>
  );
}

export default DashboardLayout;
