// import React from 'react'
import TitleCard from "../../../components/titleCard/TitleCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="title-card-container">
        <TitleCard titleText="Employee List" />
      </div>
      <div className="body-container"></div>
    </div>
  );
};

export default Dashboard;
