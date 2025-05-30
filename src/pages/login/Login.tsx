import "./Login.css";
import loginImage from "../../assets/kv-login.jpeg";
import kvLogo from "../../assets/kv-logo.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const isLoggedIn = () => {
  return localStorage.getItem("loggedIn") == "true";
};

const Login = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = () => {
    if (Username == "admin" && Password == "admin") {
      localStorage.setItem("loggedIn", "true");
      navigate("/employees");
      // navigate(0);
    }
  };

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
            <Input
              labelText="Username"
              placeholder="Enter Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              // clearButton
            />
            <Input
              type="password"
              labelText="Password"
              placeholder="Enter Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              // clearButton
            />
          </div>
          <div className="login-button-container">
            <Button buttonText="Login" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
