import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="page-container">
        <Navbar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
