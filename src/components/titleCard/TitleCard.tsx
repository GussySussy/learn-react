import React from "react";
import "./TitleCard.css";

import { LuPencil, LuPlus } from "react-icons/lu";
import Select from "../select/Select";
import { Status } from "../../pages/employees/dashboard/components/tableRow/TableRow";
import { useNavigate } from "react-router-dom";
import FilterSearchButton from "./components/FilterSearchButton";

interface TitleCardProps {
  titleText: string;
  editOption?: boolean;
  filterOption?: boolean;
  createOption?: boolean;
}

const TitleCard = ({
  titleText,
  filterOption,
  editOption,
  createOption,
}: TitleCardProps) => {
  const navigate = useNavigate();

  const handleCreateEmployee = () => {
    navigate("/employees/create");
  };

  const handleEditEmployee = () => {};

  return (
    <div className="title-card">
      <div className="title-card-text">{titleText}</div>
      <div className="title-card-options">
        {filterOption ? (
          <FilterSearchButton
            options={[Status.ACTIVE, Status.INACTIVE, Status.PROBATION]}
            defaultOption="Status"
            variant="filter"
          />
        ) : null}
        {editOption ? (
          <div className="title-card-option-edit">
            <div className="title-card-option-edit-icon-container option-icon-container">
              <LuPencil />
            </div>
            <div className="edit-option-text option-text">Edit</div>
          </div>
        ) : null}
        {createOption ? (
          <div className="title-card-option-create-employee">
            <div className="title-card-option-create-employee-icon-container option-icon-container">
              <LuPlus />
            </div>
            <div
              className="create-employee-option-text option-text"
              onClick={handleCreateEmployee}
            >
              Create Employee
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TitleCard;
