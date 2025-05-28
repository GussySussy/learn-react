import React, { useState } from "react";
import Input from "../../../../components/input/Input";
import Select from "../../../../components/select/Select";
import "./CreateEmployeeForm.css";
import Button from "../../../../components/button/Button";

const DepartmentOptions = [
  { optionName: "HR" },
  { optionName: "Marketing" },
  { optionName: "Developer" },
  { optionName: "UI/UX" },
];

const RoleOptions = [
  { optionName: "Developer" },
  { optionName: "Marketing" },
  { optionName: "UI" },
  { optionName: "UX" },
  { optionName: "HR" },
];

const StatusOptions = [
  { optionName: "ACTIVE" },
  { optionName: "INACTIVE" },
  { optionName: "PROBATION" },
];

const CreateEmployeeForm = () => {
  const [name, setName] = useState("");
  // const [joiningDate,setJoiningDate] = useState<Date>(new Date())
  const [houseNo, setHouseNo] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  return (
    <div className="form-card">
      <div className="form-fields">
        <Input
          type="text"
          placeholder="Enter name"
          labelText="Employee Name"
          variant="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input type="date" labelText="Joining Date" variant="text" />
        <Input
          type="number"
          placeholder="Enter experience in years"
          labelText="Experience"
          variant="text"
        />
        <Select
          selectName="department"
          labelText="Department"
          defaultText="Choose Department"
          options={DepartmentOptions}
        />
        <Select
          selectName="role"
          labelText="Role"
          defaultText="Choose Role"
          options={RoleOptions}
        />
        <Select
          selectName="status"
          labelText="Status"
          defaultText="Status"
          options={StatusOptions}
        />
        <div className="address-container">
          <label>Address</label>
          <div className="address-fields">
            <Input
              type="text"
              placeholder="Enter House No "
              variant="text"
              className="house-number-input"
              value={houseNo}
              onChange={(e) => setHouseNo(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Enter line 1"
              variant="text"
              className="line1-input"
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Enter line 2"
              variant="text"
              className="line2-input"
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
            />
          </div>
        </div>
        <Input
          type="text"
          disabled
          placeholder="Enter employee ID"
          variant="text"
          className="employeeId-input"
          labelText="Employee ID"
          value={employeeId}
        />
      </div>
      <div className="buttons-row">
        <Button
          variant="createEmployee"
          type="submit"
          buttonText="Create"
          className="create-button"
        />
        <Button variant="createEmployee" type="reset" buttonText="Cancel" />
      </div>
    </div>
  );
};

export default CreateEmployeeForm;
