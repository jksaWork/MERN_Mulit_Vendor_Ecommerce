import React from "react";
import EditProfile from "./EditProfile";
function ProfilePageViwer({ ActivePage }) {
  const Pages = [EditProfile];
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
