import "./Login.css";
import loginImage from "../../assets/kv-login.jpeg";
import kvLogo from "../../assets/kv-logo.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginMutation } from "../../api-service/auth/login.api";

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return token;
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    const response = await login({ email: email, password: password })
      .unwrap()
      .then((response) => {
        localStorage.setItem("token", response.accessToken);
        console.log(response);
        navigate("/employees");
      })
      .catch((error) => {
        console.error(error);
      });
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
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              labelText="Password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // clearButton
            />
          </div>
          {email.length > 30 || password.length > 30 ? (
            <div className="login-input-error-message ">
              Invalid Email and Password
            </div>
          ) : null}
          <div className="login-button-container">
            <Button
              type="submit"
              name="login"
              buttonText="Login"
              onClick={handleLogin}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
