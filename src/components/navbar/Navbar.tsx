import "./Navbar.css";
import empListIcon from "../../assets/icon.svg";
import NavbarMenuItem from "./components/navbarMenuItem/NavbarMenuItem";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-menu-items">
        <NavbarMenuItem iconSrc={empListIcon} itemText="Employee List" />
        <NavbarMenuItem iconSrc={empListIcon} itemText="Create Employee" />
      </div>
      <div className="navbar-logout-button-container">
        <Button buttonText="Logout" variant="logout" />
      </div>
    </div>
  );
};

export default Navbar;
