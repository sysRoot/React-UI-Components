import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div
      className={`${props.styling} ${props.weight} ${props.text}`}
      onClick={props.clicker}
      onKeyPress={props.kPress}
      data-value={props.text}
    >
      {props.text}
    </div>
  );
};

export default ActionButton;
