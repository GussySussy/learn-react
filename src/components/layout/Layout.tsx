import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import React from "react";
import './Layout.css'
import { Outlet } from "react-router-dom";

const Layout = (
  // { children }: { children: React.ReactNode }
) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content-container">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
