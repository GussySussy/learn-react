import React from "react";
import Input from "../../../../../components/input/Input";
import Select from "../../../../../components/select/Select";
import Button from "../../../../../components/button/Button";
import "./EmployeeForm.css";
import type {
  Role,
  Status,
} from "../../../../../store/employee/employee.types";
import { useGetDepartmentListQuery } from "../../../../../api-service/department/departments.api";
interface EmployeeValues {
  employeeId: string;
  name: string;
  password?: string;
  email: string;
  dateOfJoining: string;
  experience: number;
  department: number;
  age: number;
  role: Role;
  status: Status;
  houseNo: string;
  line1: string;
  line2: string;
  pincode: string;
}

const EmployeeForm = ({
  values,
  onChange,
  buttonText,
  handleSubmit,
  disableEmployeeId,
  removePassword,
}: {
  values: EmployeeValues | undefined;
  buttonText: string;
  onChange: (field: string, value: string | number) => void;
  handleSubmit: () => void;
  disableEmployeeId?: boolean;
  removePassword?: boolean;
}) => {
  const { data: getDepartments } = useGetDepartmentListQuery();
  console.log(getDepartments);
  const departments = getDepartments?.map((department) => ({
    name: department.name,
    value: department.id,
  }));

  console.log(values?.department, departments);
  return (
    <div className="form-container">
      <div className="form-fields">
        <Input
          type="text"
          labelText="Employee ID"
          value={values?.employeeId}
          onChange={(e) => onChange("employeeId", e.target.value)}
          placeholder="Enter Employee ID"
          disabled={disableEmployeeId}
          required
        />
        <Input
          labelText="Employee Name"
          placeholder="Enter Employee Name"
          value={values?.name}
          onChange={(e) => onChange("name", e.target.value)}
          required
        />
        <Input
          labelText="Email"
          placeholder="Enter Email"
          value={values?.email}
          onChange={(e) => onChange("email", e.target.value)}
          required
        />
        {!removePassword ? (
          <Input
            labelText="Password"
            placeholder="Enter Password"
            type="password"
            value={values?.password}
            onChange={(e) => onChange("password", e.target.value)}
            required
          />
        ) : null}
        <Input
          labelText="Joining Date"
          type="date"
          placeholder="Enter Joining Date"
          value={values?.dateOfJoining.slice(0, 10)}
          onChange={(e) => onChange("dateOfJoining", e.target.value)}
          required
        />
        <Input
          labelText="Experience"
          type="number"
          placeholder="Enter Experience in Years"
          value={values?.experience}
          onChange={(e) => onChange("experience", Number(e.target.value))}
          required
        />
        <Input
          labelText="Age"
          type="number"
          placeholder="Enter Age in Years"
          value={values?.age}
          onChange={(e) => onChange("age", Number(e.target.value))}
          required
        />

        <Select
          labelText="Department"
          defaultOption="Choose Department"
          options={departments ?? []}
          value={values?.department}
          onChange={(e) => onChange("department", Number(e.target.value))}
          required
        />
        <Select
          labelText="Role"
          defaultOption="Choose Role"
          options={[
            { name: "UI" },
            { name: "DEVELOPER" },
            { name: "UX" },
            { name: "HR" },
          ]}
          value={values?.role}
          onChange={(e) => onChange("role", e.target.value)}
          required
        />

        <Select
          labelText="Status"
          defaultOption="Choose Status"
          options={[
            { name: "ACTIVE" },
            { name: "INACTIVE" },
            { name: "PROBATION" },
          ]}
          value={values?.status}
          onChange={(e) => onChange("status", e.target.value)}
          required
        />
        <div className="address-container">
          <div className="address-fields">
            <Input
              labelText="Address"
              placeholder="Enter House Number"
              value={values?.houseNo}
              onChange={(e) => onChange("houseNo", e.target.value)}
              required
            />
            <Input
              placeholder="Enter Line 1"
              value={values?.line1}
              onChange={(e) => onChange("line1", e.target.value)}
              required
            />
            <Input
              placeholder="Enter Line 2"
              value={values?.line2}
              onChange={(e) => onChange("line2", e.target.value)}
            />
            <Input
              placeholder="Enter Postcode"
              value={values?.pincode}
              onChange={(e) => onChange("pincode", e.target.value)}
              required
            />
          </div>
        </div>
        <Button
          type="submit"
          buttonText={buttonText}
          variant="create"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default EmployeeForm;
