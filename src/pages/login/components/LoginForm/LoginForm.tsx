import React, { useEffect, useRef, useState } from "react";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import "./LoginForm.css";
import useMousePosition from "../../../../hooks/useMousePosition";
import useShowPassword from "../../../../hooks/useShowPassword";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const checkbox = useRef<HTMLInputElement>(null);
  // const [mouseX, mouseY] = useMousePosition();
  const {passwordVisible, setPasswordVisible} = useShowPassword();
  const navigate = useNavigate();

  useEffect(() => {
    if (username.length > 10 || password.length > 10)
      setError(`Username and Password should not exceed 10 letters`);
    else setError("");
  }, [username, password]);

  // useEffect(() => {
  //   if (userName.current) userName.current.focus();
  // }
  // , []);

  const handleLogin = () => {
    if (username == "admin" && password == "admin") {
      localStorage.setItem("login", "true");
      navigate("/employees");
    } else {
      setError("Not a valid login");
    }
  };

  return (
    <div className="form-content">
      {/* <h1>{`X : ${mouseX}`}</h1>
      <h1>{`Y : ${mouseY}`}</h1> */}
      <Input
        labelText="Username"
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ref={checkbox}
        variant="input--clear"
        endAdornment={
          <Button
            buttonText="Clear"
            variant="login-clear"
            type="button"
            fn={() => setUsername("")}
          />
        }
      />
      <Input
        labelText="Password"
        type={passwordVisible ? "text" : "password"}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        endAdornment={
          <Button
            buttonText="Clear"
            variant="login-clear"
            type="button"
            fn={() => setPassword("")}
          />
        }
      />
      <p className="error-message">{error}</p>
      <Input
        type="checkbox"
        labelText="Show Password"
        checked={passwordVisible}
        onChange={(e) =>
          setPasswordVisible(e.target.checked)
        }
      />
      <div className="button-container">
        <Button
          type="button"
          variant="createEmployee"
          buttonText="Login"
          fn={handleLogin}
          disabled={!(password.length > 0 || username.length > 0)}
        />
      </div>
    </div>
  );
};

export default LoginForm;
