import React from "react";
import "./TitleCard.css";

interface TitleCardProps {
  titleText: string;
}

const TitleCard = ({ titleText }: TitleCardProps) => {
  return <div className="title-card">{titleText}</div>;
};

export default TitleCard;
