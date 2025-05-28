import { useEffect, useState, } from "react";

const useShowPassword = () => {
  localStorage.setItem("passwordVisible", "false");
  const [passwordVisible, setPasswordVisible] = useState(
    (localStorage.getItem("passwordVisible") === "true")? true : false
  );

  useEffect(()=> {
    localStorage.setItem("passwordVisible",passwordVisible.toString())
  },[passwordVisible])

  return {passwordVisible,setPasswordVisible}
};

export default useShowPassword;
