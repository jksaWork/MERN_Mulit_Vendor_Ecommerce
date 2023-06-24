import React from "react";
import { DashBoardHeader, DasahBoardSideBar, DashboardBody } from "./";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid md:grid-cols-[300px_1fr] grid-cols-[80px_1fr]  justify-start">
        <DasahBoardSideBar />
        <DashboardBody children={children} />
        {/* < /> */}
      </div>
    </div>
  );
}

export default DashboardLayout;
