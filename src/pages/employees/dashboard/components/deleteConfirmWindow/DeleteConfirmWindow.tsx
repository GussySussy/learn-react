import "./DeleteConfirmWindow.css";
import Button from "../../../../../components/button/Button";

interface DeleteConfirmWindowProps {
  empId: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmWindow = ({
  empId,
  onConfirm,
  onCancel,
}: DeleteConfirmWindowProps) => {
  return (
    <div className="modal-overlay">
      <div className="delete-confirm-popup-container">
        <div className="popup-text">
          Are you sure you want to delete employee <strong>{empId}</strong>?
        </div>
        <div className="popup-buttons-row">
          <Button variant="logout" buttonText="Delete" onClick={onConfirm} />
          <Button variant="primary" buttonText="Cancel" onClick={onCancel} />
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmWindow;
