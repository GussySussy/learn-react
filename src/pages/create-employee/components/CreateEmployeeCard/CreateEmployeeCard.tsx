import CreateEmployeeForm from "../CreateEmployeeForm/CreateEmployeeForm";
import './CreateEmployeeCard.css'

const CreateEmployeeCard = () => {
  return (
    <div className="content">
      <div className="title-card">
        <h1>Create Employee</h1>
      </div>
      <CreateEmployeeForm />
    </div>
  );
};

export default CreateEmployeeCard;
