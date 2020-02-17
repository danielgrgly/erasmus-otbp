import React from "react";
import CityCard from "./CityCard";
import CardContainer from "./CardContainer";

const DefaultCard = props => {
  const data = require("../assets/data.json");
  return (
    <CardContainer>
      <div className="title-container">
        <h1 className="title">Erasmus+</h1>
        <p className="subtitle">Off the beaten path</p>
      </div>
      <h2>Explore cities</h2>
      {Object.keys(data).map(key => (
        <CityCard data={data[key]} />
      ))}
    </CardContainer>
  );
};

export default DefaultCard;
