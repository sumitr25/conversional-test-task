import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = (props) => (
  <Button variant="contained" onClick={() => props.onClick()}>{props.text}</Button>
);

export default ButtonComponent;
