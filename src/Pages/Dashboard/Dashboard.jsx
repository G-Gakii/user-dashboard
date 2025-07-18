import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Customers from "../../Components/Customers/Customers";
import "./Dashboard.css";
import CustomersHeader from "../../Components/CustomersHeader.jsx/CustomersHeader";
import Analytic from "../../Components/Analytics/Analytic";

const Dashboard = () => {
  return (
    <div className="dashboard__container">
      <Sidebar />
      <div>
        <CustomersHeader />
        <Analytic />
        <Customers />
      </div>
    </div>
  );
};

export default Dashboard;
