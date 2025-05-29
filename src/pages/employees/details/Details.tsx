import { useParams } from "react-router-dom";
import "./Details.css";
import TitleCard from "../../../components/titleCard/TitleCard";

const Details = () => {
  const { id } = useParams();

  return (
    <div className="employee-list-container">
      <div className="title-card-container">
        <TitleCard titleText="Create Employee" />
      </div>
    </div>
  );
};

export default Details;
