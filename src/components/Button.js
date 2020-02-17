import React from "react";

import "./Button.css";

const Button = props => (
  <button onClick={props.onClick} className="button">
    {props.children}
  </button>
);

export default Button;
