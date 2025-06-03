import React from "react";
import "./EmployeeTable.css";
import TableRow, { Status } from "../tableRow/TableRow";
import { useSearchParams } from "react-router-dom";
import type { Employee } from "../../../../../store/employee/employee.types";
import { useGetEmployeeListQuery } from "../../../../../api-service/employees/employees.api";

const EmployeeTable = ({
  confirmDelete,
}: {
  confirmDelete: (empId: number) => void;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useGetEmployeeListQuery();
  console.log(data);
  // const state = useAppSelector((state) => state);
  // console.log(state);
  // let employeeList = state.employee.employees;
  // console.log(employeeList);

  // const handleSetStatusFilter = () => {
  //   const filter = searchParams.get("status");
  //   return filter ? filter;
  // };

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
      <TableRow
        employeeList={data}
        filter={searchParams.get("status")}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default EmployeeTable;
