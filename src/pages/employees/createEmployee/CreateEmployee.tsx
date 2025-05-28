// import React from 'react'

import Input from "../../../components/input/Input";
import TitleCard from "../../../components/titleCard/TitleCard";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  return (
    <div className="create-employee-container">
      <div className="title-card-container">
        <TitleCard titleText="Create Employee" />
      </div>
      <div className="body-container">
        <div className="form-container"> 
          <div className="form-fields">
            <Input labelText="Username" placeholder="Enter Username" />
            <Input labelText="Joining Date" type="date" placeholder="Enter Joining Date" />
            <Input labelText="Experience" type="number" placeholder="Enter Experience in Years" />
            <Input labelText="Username" placeholder="Enter Username" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
