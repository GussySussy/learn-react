import "./Header.css";
import kvLogo from "../../assets/kv-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="kv-logo-container">
          <img src={kvLogo} height="80px" className="kv-logo-image"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
