import "./UncontrolledLogin.css";
import { useRef, useEffect, type ChangeEvent } from "react";
import kvLoginImg from "../../../public/assets/kv-login.jpeg";
import kvLogo from "../../../public/assets/kv-logo.png";
import LoginInput from "./components/UncontrolledLogin/LoginInput";
import Button from "./components/UncontrolledLogin/Button";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  const handleClearUsername = () => {
    if (!usernameRef.current) return;
    usernameRef.current.value = "";
    clearButtonRef.current!.disabled = true;
  };

  const handleClearButton = (e: ChangeEvent<HTMLInputElement>) => {
    if (!clearButtonRef.current) return;
    if (e.target.value.length > 0) {
      clearButtonRef.current.disabled = false;
    }
    clearButtonRef.current.onclick = handleClearUsername;

  };

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              name="username"
              onChange={handleClearButton}
              endAdornment={
                <Button
                  type="button"
                  ref={clearButtonRef}
                  onClick={handleClearUsername}
                  variant="secondary"
                  disabled
                >
                  Clear
                </Button>
              }
            />

            <LoginInput
              id="login-password-input"
              label="Password"
              name="password"
            />

            <Button type="submit" className="login-button">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;
