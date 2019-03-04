import React from "react";
import "./Display.css";

const CalculatorDisplay = (props) => {
  return (
    <div className="display">
      <p className="displayContent">{props.display}</p>
    </div>
  );
};

export default CalculatorDisplay;
