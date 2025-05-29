import "./Navbar.css";
import empListIcon from "../../assets/icon.svg";
import NavbarMenuItem from "./components/navbarMenuItem/NavbarMenuItem";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    navigate("/");
    // navigate(0);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-menu-items">
        <NavbarMenuItem
          iconSrc={empListIcon}
          itemText="Employee List"
          path="/employees"
        />
        <NavbarMenuItem
          iconSrc={empListIcon}
          itemText="Create Employee"
          path="/employees/create"
        />
      </div>
      <div className="navbar-logout-button-container">
        <Button buttonText="Logout" variant="logout" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Navbar;
