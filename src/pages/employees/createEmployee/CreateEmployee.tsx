// import React from 'react'

import { useState } from "react";
import TitleCard from "../../../components/titleCard/TitleCard";
import "./CreateEmployee.css";
import EmployeeForm from "./components/employeeForm/EmployeeForm";
// import { useSelector } from "react-redux";
import {
  EMPLOYEE_ACTION_TYPES,
  EmployeeRole,
  EmployeeStatus,
} from "../../../store/employee/employee.types";
// import { useAppDispatch } from "../../../store/store";
import { useCreateEmployeeMutation } from "../../../api-service/employees/employees.api";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  // const dispatch = useAppDispatch();
  // const state = useSelector((state) => state);
  const [createEmployee] = useCreateEmployeeMutation();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    employeeId: "",
    name: "",
    password: "",
    email: "",
    age: 0,
    dateOfJoining: "",
    experience: 0,
    department: 0,
    role: EmployeeRole.DEVELOPER,
    status: EmployeeStatus.ACTIVE,
    houseNo: "",
    line1: "",
    line2: "",
    pincode: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const { houseNo, line1, line2, pincode, ...rest } = values;

    const newEmployee = {
      ...rest,
      address: {
        houseNo,
        line1,
        line2,
        pincode,
      },
    };
    console.log(newEmployee);
    createEmployee(newEmployee)
      .unwrap()
      .then((res) => {
        console.log("Employee created successfully:", res);
        navigate("/employees");
      })
      .catch((err) => console.error("Error creating employee:", err));
  };

  return (
    <div className="create-employee-container">
      <div className="title-card-container">
        <TitleCard titleText="Create Employee" />
      </div>
      <div className="body-container">
        <EmployeeForm
          values={values}
          onChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Create"
        />
      </div>
    </div>
  );
};

export default CreateEmployee;
