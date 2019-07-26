import React from 'react';
import './Button.css';

const Button = props => {
  return <div className={`btn ${props.classes}`}>{props.children}</div>;
};

export default Button;
