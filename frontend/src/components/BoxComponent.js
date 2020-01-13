import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const BoxComponent = (props) => (
  <Box border={1}>{props.children}</Box>
);

BoxComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default BoxComponent;
