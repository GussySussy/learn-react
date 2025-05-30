import React, { useState } from "react";
import "./TableRow.css";
import { LuInfo, LuPencil, LuTrash } from "react-icons/lu";
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
  filter: string | null;
  confirmDelete: (empId: string) => void;
}

const TableRow = ({
  variant = "primary",
  filter,
  employeeList,
  confirmDelete,
}: TableRowProps) => {
  const navigate = useNavigate();

  const handleEdit = (empId: string) => {
    navigate(`edit/${empId}`);
  };

  const handleDelete = (empId: string) => {
    confirmDelete(empId);
  };

  const handleInfo = (empId: string) => {
    navigate(`${empId}`);
  };

  return (
    <>
      {employeeList.map((row) =>
        row.Status == filter || !filter ? (
          <div
            className={`table-row table-row--${variant}`}
            onClick={() => handleInfo(row.employeeID)}
            style={{ cursor: "pointer" }}
          >
            <div className="row-employee-name">{row.employeeName}</div>
            <div className="row-employee-id">{row.employeeID}</div>
            <div className="row-joining-date">{row.JoiningDate}</div>
            <div className="row-role">{row.Role}</div>
            <div className="row-status ">
              <div
                className={`status-container status-container--${row.Status}`}
              >
                {row.Status}
              </div>
            </div>
            <div className="row-experience">{row.Experience}</div>
            <div className="row-actions">
              <LuPencil
                size={22}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(row.employeeID);
                }}
                style={{ cursor: "pointer" }}
              />
              <LuTrash
                size={22}
                color="red"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(row.employeeID);
                }}
                style={{ cursor: "pointer" }}
              />
              {/* <LuInfo
                size={22}
                color="#03AEEE"
                onClick={() => handleInfo(row.employeeID)}
                style={{ cursor: "pointer" }}
              /> */}
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default TableRow;
