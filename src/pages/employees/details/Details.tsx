// import React from 'react'
import TitleCard from "../../../components/titleCard/TitleCard";
import { dummyEmployeeList } from "../dashboard/components/EmployeeTable/EmployeeTable";
import InfoField from "./components/InfoField";
import "./Details.css";

const EditEmployee = () => {
  const employee = dummyEmployeeList[0];

  return (
    <div className="create-employee-container">
      <div className="title-card-container">
        <TitleCard titleText="Employee Details" />
      </div>
      <div className="info-body-container">
        <div className="info-container">
          <div className="info-fields">
            <InfoField labelText="Employee ID" value={employee.employeeID} />
            <InfoField
              labelText="Employee Name"
              value={employee.employeeName}
            />
            <InfoField labelText="Username" value={employee.employeeName} />
            <InfoField labelText="Email" value={employee.employeeName} />
            <InfoField labelText="Password" value={employee.employeeID} />
            <InfoField labelText="Joining Date" value={employee.JoiningDate} />
            <InfoField labelText="Experience" value={employee.Experience} />
            <InfoField labelText="Department" value={employee.Role} />
            <InfoField labelText="Role" value={employee.Role} />

            <InfoField labelText="Address" value={employee.Experience} />

            <InfoField labelText="Status" value={employee.Status} />
          </div>
          {/* <Button buttonText="Create" /> */}
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
