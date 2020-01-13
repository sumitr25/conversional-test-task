import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonComponent = (props) => (
  <Button variant="contained" onClick={() => props.onClick()}>{props.text}</Button>
);

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonComponent;
