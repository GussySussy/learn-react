import { Outlet, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./Layout.css";
import { isLoggedIn } from "../../pages/login/Login";

const Layout = () => {
  const navigate = useNavigate();

  if (!isLoggedIn()) navigate("/");

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
