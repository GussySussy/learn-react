import "./Login.css";
import loginImage from "../../assets/kv-login.jpeg";

const Login = () => {
  return (
    <div className="login-page-container">
      <div className="image-section">
        <div className="image-container">
          <img src={loginImage} className="login-image" />
        </div>
      </div>
      <div className="login-section"> Login Section</div>
    </div>
  );
};

export default Login;
