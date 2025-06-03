import { useState } from "react";
import TitleCard from "../../../components/titleCard/TitleCard";
import "./Dashboard.css";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import DeleteConfirmWindow from "./components/deleteConfirmWindow/DeleteConfirmWindow";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EMPLOYEE_ACTION_TYPES } from "../../../store/employee/employee.types";
import { useDeleteEmployeebyIdMutation } from "../../../api-service/employees/employees.api";

const Dashboard = () => {
  const [deleteWindowToggle, setDeleteWindowToggle] = useState(false);
  const [selectedEmpId, setSelectedEmpId] = useState<number | null>(null);
  const [deleteEmployee] = useDeleteEmployeebyIdMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleConfirmDelete = (empId: number) => {
    setSelectedEmpId(empId);
    setDeleteWindowToggle(true);
  };

  const handleDelete = () => {
    // dispatch({ type: EMPLOYEE_ACTION_TYPES.DELETE, payload: selectedEmpId });
    // navigate(`delete/${selectedEmpId}`);
    console.log("Deleted employee:", selectedEmpId);
    deleteEmployee(selectedEmpId!)
      .unwrap()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    setDeleteWindowToggle(false);
    setSelectedEmpId(null);
  };

  const handleCancel = () => {
    setDeleteWindowToggle(false);
    setSelectedEmpId(null);
  };

  return (
    <div className="dashboard-container">
      <div className="title-card-container">
        <TitleCard titleText="Employee List" filterOption createOption />
      </div>
      <div className="dashboard-body-container">
        <div className="employee-list-table-container">
          <EmployeeTable confirmDelete={handleConfirmDelete} />
        </div>
      </div>

      {deleteWindowToggle && selectedEmpId && (
        <DeleteConfirmWindow
          empId={selectedEmpId}
          onConfirm={handleDelete}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Dashboard;
