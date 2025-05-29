import { useNavigate } from "react-router-dom";
import "./NavbarMenuItem.css";

interface NavbarMenuItemProps {
  iconSrc: string;
  itemText: string;
  path: string;
}

const NavbarMenuItem = ({ iconSrc, itemText, path }: NavbarMenuItemProps) => {
  const navigate = useNavigate();

  const handleSidebarItemClick = () => {
    navigate(path);
  };

  return (
    <div
      className="navbar-menu-item employee-list"
      onClick={handleSidebarItemClick}
    >
      <div className="employee-list-icon-container navbar-menu-item-icon">
        <img src={iconSrc} />
      </div>
      <div className="navbar-menu-item-text employee-list-text">{itemText}</div>
    </div>
  );
};

export default NavbarMenuItem;
