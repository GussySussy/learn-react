import { useNavigate } from "react-router-dom";
import employeeListIcon from "../../../public/assets/icon.svg";
import ExtendedButton from "../button/ExtendedButton";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("login", "false");
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <div className="sidebar-item-icon">
          <img src={employeeListIcon} />
        </div>
        <p>Employee List</p>
      </div>
      <div className="navbar-logout">
        <ExtendedButton
          onClick={handleLogout}
          buttonText="Logout"
          variant="logout"
        />
      </div>
    </div>
  );
};

export default Navbar;
