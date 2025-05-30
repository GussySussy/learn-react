import React from "react";
import Input from "../../../../../components/input/Input";
import Select from "../../../../../components/select/Select";
import Button from "../../../../../components/button/Button";
import "./EmployeeForm.css";

interface EmployeeValues {
  employeeId: string;
  employeeName: string;
  username: string;
  password: string;
  email: string;
  joiningDate: string;
  experience: string;
  department: string;
  role: string;
  status: string;
  address: string;
  houseNo: string;
  line1: string;
  line2: string;
  postcode: string;
}

const EmployeeForm = ({
  values,
  onChange,
  buttonText,
}: {
  values: EmployeeValues;
  buttonText: string;
  onChange: (field: string, value: string) => void;
}) => {
  return (
    <div className="form-container">
      <div className="form-fields">
        <Input
          type="text"
          labelText="Employee ID"
          value={values.employeeId}
          onChange={(e) => onChange("employeeId", e.target.value)}
          placeholder="Enter Employee ID"
        />
        <Input
          labelText="Employee Name"
          placeholder="Enter Employee Name"
          value={values.employeeName}
          onChange={(e) => onChange("employeeName", e.target.value)}
        />
        {/* <Input
          labelText="Username"
          placeholder="Enter Username"
          value={values.username}
          onChange={(e) => onChange("username", e.target.value)}
        /> */}
        <Input
          labelText="Email"
          placeholder="Enter Email"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
        <Input
          labelText="Password"
          placeholder="Enter Password"
          value={values.password}
          onChange={(e) => onChange("password", e.target.value)}
        />
        <Input
          labelText="Joining Date"
          type="date"
          placeholder="Enter Joining Date"
          value={values.joiningDate}
          onChange={(e) => onChange("joiningDate", e.target.value)}
        />
        <Input
          labelText="Experience"
          type="number"
          placeholder="Enter Experience in Years"
          value={values.experience}
          onChange={(e) => onChange("experience", e.target.value)}
        />

        <Select
          labelText="Department"
          defaultOption="Choose Department"
          options={["HR", "Marketing", "Development", "Sales", "UI/UX"]}
          value={values.department}
          onChange={(e) => onChange("department", e.target.value)}
        />
        <Select
          labelText="Role"
          defaultOption="Choose Role"
          options={["UI", "Developer", "UX", "HR"]}
          value={values.role}
          onChange={(e) => onChange("role", e.target.value)}
        />

        <Select
          labelText="Status"
          defaultOption="Choose Status"
          options={["ACTIVE", "INACTIVE", "PROBATION"]}
          value={values.status}
          onChange={(e) => onChange("status", e.target.value)}
        />
        <div className="address-container">
          <div className="address-fields">
            <Input
              labelText="Address"
              placeholder="Enter House Number"
              value={values.houseNo}
              onChange={(e) => onChange("houseNo", e.target.value)}
            />
            <Input
              placeholder="Enter Line 1"
              value={values.line1}
              onChange={(e) => onChange("line1", e.target.value)}
            />
            <Input
              placeholder="Enter Line 2"
              value={values.line2}
              onChange={(e) => onChange("line2", e.target.value)}
            />
            <Input
              placeholder="Enter Postcode"
              value={values.postcode}
              onChange={(e) => onChange("postcode", e.target.value)}
            />
          </div>
        </div>
        <Button
          buttonText={buttonText}
          variant="create"
          onClick={() => console.log(values)}
        />
      </div>
    </div>
  );
};

export default EmployeeForm;
