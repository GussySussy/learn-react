import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./Layout.css";
import { isLoggedIn } from "../../pages/login/Login";

const Layout = () => {
  const navigate = useNavigate();
  const token = isLoggedIn();
  console.log(`token : `, token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }

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
