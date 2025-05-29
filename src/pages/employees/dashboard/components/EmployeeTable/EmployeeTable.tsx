import React from "react";
import "./EmployeeTable.css";
import TableRow, {
  Status,
  type EmployeeRowDetails,
} from "../tableRow/TableRow";

const dummyEmployeeList: EmployeeRowDetails[] = [
  {
    employeeName: "Alice Johnson",
    employeeID: "EMP001",
    JoiningDate: "2022-03-15",
    Role: "Software Engineer",
    Status: Status.ACTIVE,
    Experience: "3 years",
  },
  {
    employeeName: "Bob Smith",
    employeeID: "EMP002",
    JoiningDate: "2021-07-01",
    Role: "Product Manager",
    Status: Status.PROBATION,
    Experience: "5 years",
  },
  {
    employeeName: "Clara Davis",
    employeeID: "EMP003",
    JoiningDate: "2019-11-20",
    Role: "UX Designer",
    Status: Status.INACTIVE,
    Experience: "6 years",
  },
  {
    employeeName: "David Lee",
    employeeID: "EMP004",
    JoiningDate: "2023-01-10",
    Role: "DevOps Engineer",
    Status: Status.ACTIVE,
    Experience: "2 years",
  },
  {
    employeeName: "Emma Wilson",
    employeeID: "EMP005",
    JoiningDate: "2020-06-05",
    Role: "QA Analyst",
    Status: Status.ACTIVE,
    Experience: "4 years",
  },
];

const EmployeeTable = () => {
  return (
    <div className="employee-table">
      <div className="table-header">
        <div>Employee Name</div>
        <div>Employee ID</div>
        <div>Joining Date</div>
        <div>Role</div>
        <div>Status</div>
        <div>Experience</div>
        <div>Actions</div>
      </div>
      <TableRow employeeList={dummyEmployeeList} />
    </div>
  );
};

export default EmployeeTable;
