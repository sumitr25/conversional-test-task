import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const H1Component = (props) => (
  <Typography variant="h1" component="h2" gutterBottom>
    {props.text}
  </Typography>
);

H1Component.propTypes = {
  text: PropTypes.string.isRequired,
};

export default H1Component;
