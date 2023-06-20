import React, { useEffect, useState } from "react";
import {
  Footer,
  Header,
  ProfileSideBar,
  ProfilePageViwer,
} from "../components";
import styles from "../styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [ActivePage, setActivePage] = useState(3);
  const { isAuthenticated } = useSelector((s) => s.usersReducer);
  const navigate = useNavigate();
  useEffect(() => {
    //     if (!isAuthenticated) navigate("/");
  });
  return (
    <div className="bg-gray-100 m-0 p-0">
      <Header />
      <div className={`${styles.section}  mt-10`}>
        <div className="grid md:grid-cols-[300px_1fr] grid-cols-[70px_1fr] my-2 gap-2 md:gap-10">
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
