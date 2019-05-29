import React from 'react';
import './button.css';

const Button = props => {
  return (
    <button onClick={props.onPress}>
      { props.buttonText }
    </button>
  );
}

export default  Button;