import React from 'react';
import './Styles.css';

const Dot = props => {
  return (
    <div onClick={() => props.click(props.value)} className={`btn ${props.classes}`}>
      {props.value}
    </div>
  );
};

export default Dot;
