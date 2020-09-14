import React from 'react';

const buttonStyle2 = {
  color: '#fff',
  background: 'black',
  padding: '.375em .75em',
  border: '1px solid #fff',
  borderRadius: '200px',
  fontSize: '1.1rem',
  lineHeight: '36px',
  width: 75,
};

const Button2 = (props) => {
  return <button style={buttonStyle2}>{props.buttonName}</button>;
};

export default Button2;
