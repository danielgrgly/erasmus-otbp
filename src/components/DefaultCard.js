import React from "react";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";

const DefaultCard = props => (
  <CardContainer>
    <div className="title-container">
      <p className="title">Erasmus+</p>
      <p className="subtitle">Off the beaten path</p>
    </div>
    <Link to="/budapest-tisztviselotelep">
      <p>MENYE TISZTVISELOTELEPRE</p>
    </Link>
  </CardContainer>
);

export default DefaultCard;
