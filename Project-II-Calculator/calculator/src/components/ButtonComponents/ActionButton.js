import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className={`${props.styling} ${props.weight} ${props.text}`}>{props.text}</div>
  );
};

export default ActionButton;
