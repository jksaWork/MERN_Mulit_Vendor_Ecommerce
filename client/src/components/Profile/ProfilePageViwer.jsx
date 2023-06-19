import React from "react";
import {
  EditProfile,
  OrdersComponents,
  TrackOrder,
  RefundOrder,
  Address,
  ChangePassword,
} from "./../index";
const InBox = () => <div>Hjsa</div>;
function ProfilePageViwer({ ActivePage }) {
  const Pages = [
    EditProfile,
    OrdersComponents,
    RefundOrder,
    InBox,
    TrackOrder,
    ChangePassword,
    InBox,
    Address,
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
