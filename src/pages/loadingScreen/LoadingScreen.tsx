import React from "react";
import "./LoadingScreen.css";
import kvLogo from "../../assets/kv-logo.png";

const LoadingScreen = () => {
  return (
    <div className="loading-logo-container">
      <img src={kvLogo} className="loading-Logo" />
    </div>
  );
};

export default LoadingScreen;
