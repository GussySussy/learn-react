import React, { useState } from "react";
import "./TableRow.css";
import { LuInfo, LuPencil, LuTrash } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import type { Employee } from "../../../../../store/employee/employee.types";

export enum Status {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  PROBATION = "Probation",
}

interface TableRowProps {
  variant?: string;
  employeeList: Employee[] | undefined;
  filter: string | null;
  confirmDelete: (empId: number) => void;
}

const TableRow = ({
  variant = "primary",
  filter,
  employeeList,
  confirmDelete,
}: TableRowProps) => {
  const navigate = useNavigate();

  const handleEdit = (empId: number) => {
    navigate(`edit/${empId}`);
  };

  const handleDelete = (empId: number) => {
    confirmDelete(empId);
  };

  const handleInfo = (empId: number) => {
    navigate(`${empId}`);
  };
  console.log(employeeList);
  return (
    <>
      {employeeList?.map((row) =>
        row.status == filter || !filter ? (
          <div
            className={`table-row table-row--${variant}`}
            onClick={() => handleInfo(row.id!)}
            style={{ cursor: "pointer" }}
          >
            <div className="row-employee-name">{row.name}</div>
            <div className="row-employee-id">{row.employeeId}</div>
            <div className="row-joining-date">
              {row.dateOfJoining.slice(0, 10)}
            </div>
            <div className="row-role">{row.role}</div>
            <div className="row-status ">
              <div
                className={`status-container status-container--${row.status}`}
              >
                {row.status}
              </div>
            </div>
            <div className="row-experience">{row.experience}</div>
            <div className="row-actions">
              <LuPencil
                size={22}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(row.id!);
                }}
                style={{ cursor: "pointer" }}
              />
              <LuTrash
                size={22}
                color="red"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(row.id!);
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
