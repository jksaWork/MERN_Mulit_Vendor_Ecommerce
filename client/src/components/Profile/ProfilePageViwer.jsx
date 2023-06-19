import React from "react";
import {
  EditProfile,
  OrdersComponents,
  TrackOrder,
  RefundOrder,
  Address,
  ChangePassword,
} from "./../index";
function ProfilePageViwer({ ActivePage }) {
  const Pages = [
    EditProfile,
    OrdersComponents,
    RefundOrder,
    TrackOrder,
    Address,
    ChangePassword,
  ];
  return (
    <div>
      {Pages.map((Page, i) => {
        if (ActivePage == i + 1) {
          return <Page />;
        }
      })}
    </div>
  );
}

export default ProfilePageViwer;
