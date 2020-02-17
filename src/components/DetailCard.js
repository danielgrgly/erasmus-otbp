import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CardContainer from "./CardContainer";

const DetailCard = props => {
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const data = require("../assets/data.json");

  useEffect(() => {
    fetch(require(`../assets/${data[id].description}`))
      .then(response => response.text())
      .then(text => {
        setDescription(text);
      });
  });

  return (
    <CardContainer>
      <img className="big-image" src={data[id].thumbnail} />
      <h2>{data[id].title}</h2>
      <p>{data[id].subtitle}</p>
      <ReactMarkdown source={description} />
    </CardContainer>
  );
};

export default DetailCard;
