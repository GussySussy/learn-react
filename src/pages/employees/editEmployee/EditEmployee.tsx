// import React from 'react'

import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Select from "../../../components/select/Select";
import TitleCard from "../../../components/titleCard/TitleCard";
import "./EditEmployee.css";

const EditEmployee = () => {
  return (
    <div className="create-employee-container">
      <div className="title-card-container">
        <TitleCard titleText="Edit Employee Details" />
      </div>
      <div className="body-container">
        <div className="form-container">
          <div className="form-fields">
            <Input labelText="Username" placeholder="Enter Username" />
            <Input
              labelText="Joining Date"
              type="date"
              placeholder="Enter Joining Date"
            />
            <Input
              labelText="Experience"
              type="number"
              placeholder="Enter Experience in Years"
            />
            <Select
              labelText="Department"
              defaultOption="Choose Department"
              options={["HR", "Marketing", "Development", "Sales", "UI/UX"]}
            />
            <Select
              labelText="Role"
              defaultOption="Choose Role"
              options={["UI", "Developer", "UX", "HR"]}
            />
            <Select
              labelText="Status"
              defaultOption="Choose Status"
              options={["ACTIVE", "INACTIVE", "PROBATION"]}
            />
            <div className="address-container">
              <div className="address-fields">
                <Input labelText="Address" placeholder="Enter House Number" />
                <Input placeholder="Enter Line 1" />
                <Input placeholder="Enter Line 2" />
              </div>
            </div>
            <Input
              type="text"
              labelText="Employee ID"
              placeholder="AD1234"
              variant="disabled"
              disabled
            />
          </div>
          <Button buttonText="Create" />
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
