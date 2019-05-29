import React from 'react';
import './button.scss';

const Button = props => {
  return (
    <button onClick={props.onPress}>
      { props.buttonText }
    </button>
  );
}

export default  Button;