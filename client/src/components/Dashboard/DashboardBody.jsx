import React from "react";
import DashBoardHeader from "./DashBoardHeader";

function DashboardBody({ children }) {
  return (
    <div className="h-screen relative" style={{ overflowY: "scroll" }}>
      <DashBoardHeader />
      <div className="bg-gray-100  p-4">{children}</div>
    </div>
  );
}

export default DashboardBody;
