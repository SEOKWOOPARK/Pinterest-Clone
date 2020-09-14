import React from 'react';

const buttonStyle1 = {
  color: '#fff',
  background: 'black',
  padding: '.375em .75em',
  border: '1px solid #fff',
  borderRadius: '20px',
  fontSize: '1.1rem',
  lineHeight: 1.3,
};

const Button1 = (props) => {
  return <button style={buttonStyle1}>{props.buttonName}</button>;
};

export default Button1;
