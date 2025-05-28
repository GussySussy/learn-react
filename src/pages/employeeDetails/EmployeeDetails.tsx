import React from "react";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();

  return <div>Details of Employee with id : {id}</div>;
};

export default EmployeeDetails;
