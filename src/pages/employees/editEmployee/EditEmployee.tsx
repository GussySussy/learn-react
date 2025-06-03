import { useEffect, useState } from "react";
import TitleCard from "../../../components/titleCard/TitleCard";
import "./EditEmployee.css";
import EmployeeForm from "../createEmployee/components/employeeForm/EmployeeForm";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "../../../api-service/employees/employees.api";
import type {
  Employee,
  Role,
  Status,
} from "../../../store/employee/employee.types";

interface FormEmployee {
  id?: number;
  employeeId: string;
  email: string;
  name: string;
  age: number;
  houseNo: string;
  line1: string;
  line2: string;
  pincode: string;
  password: string;
  role: Role;
  dateOfJoining: string;
  experience: number;
  status: Status;
  department: number;
}

const reformatEmployee = (employee: Employee): FormEmployee => {
  return {
    id: employee.id,
    employeeId: employee.employeeId,
    email: employee.email,
    name: employee.name,
    age: employee.age,
    houseNo: employee.address.houseNo,
    line1: employee.address.line1,
    line2: employee.address.line2,
    pincode: employee.address.pincode,
    password: employee.password,
    role: employee.role,
    dateOfJoining: employee.dateOfJoining,
    experience: employee.experience,
    status: employee.status,
    department: employee.department.id,
  };
};

const EditEmployee = () => {
  // console.log(id);
  // const state = useSelector((state) => state);
  // const employees = [...state.employee.employees];
  // const employee = employees.filter((employee) => employee.employeeId == id)[0];
  // console.log(employees, employee);
  // const dispatch = useAppDispatch();
  // const dispatch = useAppDispatch();
  // const state = useSelector((state) => state);
  {
    const { id } = useParams();
    const [updateEmployee] = useUpdateEmployeeMutation();
    const [values, setValues] = useState<FormEmployee>();
    const navigate = useNavigate();

    const { data, isLoading } = useGetEmployeeByIdQuery(parseInt(id ?? ""));
    console.log("edit employee page : " + data);

    useEffect(() => {
      if (data) {
        setValues(reformatEmployee(data));
      }
    }, [data]);

    const handleChange = (field: string, value: string | number) => {
      setValues((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

    const handleSubmit = () => {
      const { houseNo, line1, line2, pincode, ...rest } = values!;

      const newEmployee = {
        ...rest,
        address: {
          houseNo,
          line1,
          line2,
          pincode,
        },
      };
      console.log(newEmployee);
      updateEmployee({ id: parseInt(id!), payload: newEmployee })
        .unwrap()
        .then((res) => (navigate("/employees")))
        .catch((err) => console.error(err));
    };

    return (
      <>
        {isLoading ? null : (
          <div className="create-employee-container">
            <div className="title-card-container">
              <TitleCard titleText="Edit Employee" />
            </div>
            <div className="body-container">
              <EmployeeForm
                disableEmployeeId
                values={values}
                onChange={handleChange}
                handleSubmit={handleSubmit}
                buttonText="Update"
              />
            </div>
          </div>
        )}
      </>
    );
  }
};

export default EditEmployee;
