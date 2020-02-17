import React from "react";
import { Link } from "react-router-dom";
import "../assets/data.json";

import "./CityCard.css";

const CityCard = props => {
  return (
    <Link to={props.data.path}>
      <div className="city-card">
        <div className="city-card-details">
          <h3>{props.data.title}</h3>
          <p className="city-card-subtitle">{props.data.subtitle}</p>
        </div>
        <img src={props.data.thumbnail} />
      </div>
    </Link>
  );
};

export default CityCard;
