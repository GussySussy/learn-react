// import React from 'react'

import { useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Select from "../../../components/select/Select";
import TitleCard from "../../../components/titleCard/TitleCard";
import "./EditEmployee.css";
import EmployeeForm from "../createEmployee/components/employeeForm/EmployeeForm";

const EditEmployee = () => {
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
        <TitleCard titleText="Edit Employee Details" />
      </div>
      <div className="body-container">
        <EmployeeForm values={values} onChange={handleChange} buttonText="Update"/>
      </div>
    </div>
  );
};

export default EditEmployee;
