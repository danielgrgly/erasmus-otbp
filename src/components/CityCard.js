import React from "react";
import { Link } from "react-router-dom";

import "./CityCard.css";

const CityCard = props => (
  <Link to="/aaaa">
    <div className="city-card">
      <div className="city-card-details">
        <h3>Tisztviselotelep</h3>
        <p className="city-card-subtitle">Budapest, Hungary</p>
        {/* <Button>Visit</Button> */}
      </div>
      <img src="https://konzervatorium.blog.hu/media/image/dszg/templom1.jpg" />
    </div>
  </Link>
);

export default CityCard;
