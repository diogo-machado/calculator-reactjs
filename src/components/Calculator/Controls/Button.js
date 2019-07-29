import React from 'react';
import './Styles.css';

const Button = props => {
  return (
    <div onClick={() => props.click(props.value)} className={`btn ${props.classes}`}>
      {props.value}
    </div>
  );
};

export default Button;
