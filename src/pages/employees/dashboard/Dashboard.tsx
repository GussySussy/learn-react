import { useState } from "react";
import TitleCard from "../../../components/titleCard/TitleCard";
import "./Dashboard.css";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import DeleteConfirmWindow from "./components/deleteConfirmWindow/DeleteConfirmWindow";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [deleteWindowToggle, setDeleteWindowToggle] = useState(false);
  const [selectedEmpId, setSelectedEmpId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleConfirmDelete = (empId: string) => {
    setSelectedEmpId(empId);
    setDeleteWindowToggle(true);
  };

  const handleDelete = () => {
    navigate(`delete/${selectedEmpId}`);
    console.log("Deleted employee:", selectedEmpId);
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
