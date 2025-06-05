import "./Header.css";
import kvLogo from "../../assets/kv-logo.png";
import { LuUser } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">
        <div className="kv-logo-container">
          <img src={kvLogo} height="80px" className="kv-logo-image" />
        </div>
        <div className="profile-button-container">
          <LuUser
            className="profile-icon"
            onClick={() => navigate("/employees/profile")}
            size={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
