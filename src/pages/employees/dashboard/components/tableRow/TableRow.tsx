import React from "react";
import "./TableRow.css";

export enum Status {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  PROBATION = "Probation",
}

export interface EmployeeRowDetails {
  employeeName: string;
  employeeID: string;
  JoiningDate: string;
  Role: string;
  Status: Status;
  Experience: string;
}

interface TableRowProps {
  variant?: string;
  employeeList: EmployeeRowDetails[];
}

const TableRow = ({ variant = "primary", employeeList }: TableRowProps) => {
  return employeeList.map((row) => (
    <div className={`table-row table-row--${variant}`}>
      <div className="row-employee-name">{row.employeeName}</div>
      <div className="row-employee-id">{row.employeeID}</div>
      <div className="row-joining-date">{row.JoiningDate}</div>
      <div className="row-role">{row.Role}</div>
      <div className="row-status ">
        <div className={`status-container status-container--${row.Status}`}>
          {row.Status}
        </div>
      </div>
      <div className="row-experience">{row.Experience}</div>
      <div className="row-actions">Actions</div>
    </div>
  ));
};

export default TableRow;
