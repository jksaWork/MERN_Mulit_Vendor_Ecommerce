import React, { useState } from "react";
import {
  Footer,
  Header,
  ProfileSideBar,
  ProfilePageViwer,
} from "../components";
import styles from "../styles";

function ProfilePage() {
  const [ActivePage, setActivePage] = useState(3);
  return (
    <div className="bg-gray-100">
      <Header />
      <div class={`${styles.section}  mt-10`}>
        <div className="grid md:grid-cols-[300px_1fr] grid-cols-[70px_1fr] my-2 gap-10">
          <ProfileSideBar
            ActivePage={ActivePage}
            setActivePage={setActivePage}
          />
          <ProfilePageViwer ActivePage={ActivePage} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
