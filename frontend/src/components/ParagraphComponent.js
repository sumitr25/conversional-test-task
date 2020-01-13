import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const ParagraphComponent = (props) => (
  <Typography variant="body2" gutterBottom>
    {props.text}
  </Typography>
);

ParagraphComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ParagraphComponent;
