// import React from 'react'
import TitleCard from "../../../components/titleCard/TitleCard";
import "./Dashboard.css";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="title-card-container">
        <TitleCard titleText="Employee List" filterOption createOption/>
      </div>
      <div className="dashboard-body-container">
        <div className="employee-list-table-container">
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
