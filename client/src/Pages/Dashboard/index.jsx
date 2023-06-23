import React, { useEffect } from "react";
import { DashBoardHeader, DashboardLayout } from "../../components/Dashboard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Dashboard() {
  const { isAuthenticated } = useSelector((s) => s.shop);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticated);
    setTimeout(() => {
      if (isAuthenticated == false) {
        toast.error("Your Session Is End Try To Login Again");
        navigate("/shop/login");
      }
    }, 2000);
  }, []);

  return <DashboardLayout>Hello World</DashboardLayout>;
}

export default Dashboard;
