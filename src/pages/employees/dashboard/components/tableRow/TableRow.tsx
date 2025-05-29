import React from "react";
import "./TableRow.css";
import { LuPencil, LuTrash } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleEdit = (empId: string) => {
    navigate(`edit/${empId}`);
  };

  const handleDelete = (empId: string) => {
    navigate(`delete/${empId}`);
  };

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
      <div className="row-actions">
        <LuPencil size={22} onClick={() => handleEdit(row.employeeID)} />
        <LuTrash
          size={22}
          color="red"
          onClick={() => handleDelete(row.employeeID)}
        />
      </div>
    </div>
  ));
};

export default TableRow;
