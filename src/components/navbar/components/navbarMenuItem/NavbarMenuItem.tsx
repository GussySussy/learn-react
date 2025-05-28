import "./NavbarMenuItem.css";

interface NavbarMenuItemProps {
  iconSrc: string;
  itemText: string;
}

const NavbarMenuItem = ({ iconSrc, itemText }: NavbarMenuItemProps) => {
  return (
    <div className="navbar-menu-item employee-list">
      <div className="employee-list-icon-container navbar-menu-item-icon">
        <img src={iconSrc} />
      </div>
      <div className="navbar-menu-item-text employee-list-text">{itemText}</div>
    </div>
  );
};

export default NavbarMenuItem;
