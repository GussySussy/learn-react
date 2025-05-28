import "./Navbar.css";
import empListIcon from "../../assets/icon.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-menu-items">
        <div className="navbar-menu-item employee-list">
          <div className="employee-list-icon-container navbar-menu-item-icon">
            <img src={empListIcon} />
          </div>
          <div className="navbar-menu-item-text employee-list-text">
            Employee List
          </div>
        </div>
      </div>
      <div>Logout</div>
    </div>
  );
};

export default Navbar;
