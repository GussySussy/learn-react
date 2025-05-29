import "./Login.css";
import loginImage from "../../assets/kv-login.jpeg";
import kvLogo from "../../assets/kv-logo.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/employees")
  }

  return (
    <div className="login-page-container">
      <div className="image-section">
        <div className="image-container">
          <img src={loginImage} className="login-image" />
        </div>
      </div>
      <div className="login-section">
        <div className="login-content">
          <div className="logo-image-container">
            <img src={kvLogo} className="kv-logo" />
          </div>
          <div className="login-form-fields">
            <Input labelText="Username" placeholder="Enter Username" />
            <Input labelText="Password" placeholder="Enter Password" />
          </div>
          <div className="login-button-container">
            <Button buttonText="Login" onClick={handleLogin}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
