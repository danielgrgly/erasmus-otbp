import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import CardContainer from "./CardContainer";

const DetailCard = props => {
  const { id } = useParams();
  const data = require("../assets/data.json");
  return (
    <CardContainer>
      <h2>{data[id].title}</h2>
      <p>{data[id].subtitle}</p>
      <p>{data[id].thumbnail}</p>
    </CardContainer>
  );
};

export default DetailCard;
