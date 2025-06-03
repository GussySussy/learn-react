import { useParams } from "react-router-dom";
import TitleCard from "../../../components/titleCard/TitleCard";
import InfoField from "./components/InfoField";
import "./Details.css";
import { useSelector } from "react-redux";
import { useGetEmployeeByIdQuery } from "../../../api-service/employees/employees.api";

const EditEmployee = () => {
  const { id } = useParams();
  // console.log(id);
  // const state = useSelector((state) => state);
  // const employees = [...state.employee.employees];
  // const employee = employees.filter((employee) => employee.employeeId == id)[0];
  // console.log(employees, employee);
  const { data: employee } = useGetEmployeeByIdQuery(Number(id));
  console.log(employee);

  return (
    <div className="create-employee-container">
      <div className="title-card-container">
        <TitleCard titleText="Employee Details" />
      </div>
      <div className="info-body-container">
        <div className="info-container">
          {employee ? (
            <div className="info-fields">
              <InfoField labelText="Employee ID" value={employee.employeeId} />
              <InfoField labelText="Employee Name" value={employee.name} />
              <InfoField labelText="Email" value={employee.email} />
              <InfoField
                labelText="Password"
                value={employee.password.slice(0, 10)}
              />
              <InfoField
                labelText="Joining Date"
                value={employee?.dateOfJoining.slice(0, 10)}
              />
              <InfoField labelText="Experience" value={employee?.experience} />
              <InfoField
                labelText="Department"
                value={employee?.department.name}
              />
              <InfoField labelText="Role" value={employee?.role} />
              <div>
                <InfoField
                  labelText="Address"
                  value={employee?.address.houseNo}
                />
                <InfoField
                  value={employee?.address.line1}
                />
                <InfoField
                  value={employee?.address.line2}
                />
                <InfoField
                  value={employee?.address.pincode}
                />
              </div>
              <InfoField labelText="Status" value={employee.status} />
            </div>
          ) : null}
          {/* <Button buttonText="Create" /> */}
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
