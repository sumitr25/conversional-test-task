import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const H2Component = (props) => (
  <Typography variant="h2" gutterBottom>
    {props.text}
  </Typography>
);

H2Component.propTypes = {
  text: PropTypes.string.isRequired,
};

export default H2Component;
