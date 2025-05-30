// import React from 'react'

import { useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Select from "../../../components/select/Select";
import TitleCard from "../../../components/titleCard/TitleCard";
import "./CreateEmployee.css";
import EmployeeForm from "./components/employeeForm/EmployeeForm";

const CreateEmployee = () => {
  const [values, setValues] = useState({
    employeeId: "",
    employeeName: "",
    username: "",
    password: "",
    email: "",
    joiningDate: "",
    experience: "",
    department: "",
    role: "",
    status: "",
    address: "",
    houseNo: "",
    line1: "",
    line2: "",
    postcode: "",
  });

  const handleChange = (field: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="create-employee-container">
      <div className="title-card-container">
        <TitleCard titleText="Create Employee" />
      </div>
      <div className="body-container">
        <EmployeeForm values={values} onChange={handleChange} />
      </div>
    </div>
  );
};

export default CreateEmployee;
