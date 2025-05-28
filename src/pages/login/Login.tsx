import "./Login.css";
import loginImage from "../../assets/kv-login.jpeg";
import kvLogo from "../../assets/kv-logo.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Login = () => {
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
            <Button buttonText="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
