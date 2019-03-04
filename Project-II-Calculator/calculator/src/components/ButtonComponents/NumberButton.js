import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className={`${props.styling} ${props.type} ${props.weight} ${props.text}`}>
      {props.text}
    </div>
  );
};

export default NumberButton;