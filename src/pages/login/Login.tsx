import "./Login.css";
import loginImage from "../../../public/assets/kv-login.jpeg";
import logoImage from "../../../public/assets/kv-logo.png";
import LoginForm from "./components/LoginForm/LoginForm";
import Image from "../../components/image/Image";

const Login = () => {
  return (
      <div className="whole">
        <div className="left-container">
          <div className="circle-frame">
            <Image classPrefix="login" src={loginImage} />
          </div>
        </div>
        <div className="right-container">
          <div className="form-container">
            <Image
              classPrefix="kv-logo"
              src={logoImage}
              width="auto"
              height="50px"
            />
            <LoginForm />
          </div>
        </div>
      </div>
  );
};

export default Login;
