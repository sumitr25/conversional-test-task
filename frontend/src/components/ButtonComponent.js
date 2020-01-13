import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = (props) => {
  console.log('Button Component: ', props);
  return (
    <Button variant="contained" onClick={() => props.onClick()}>{props.text}</Button>
  );
};

export default ButtonComponent;
