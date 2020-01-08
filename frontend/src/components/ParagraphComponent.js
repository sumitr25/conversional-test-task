import React from 'react';
import Typography from '@material-ui/core/Typography';

const ParagraphComponent = (props) => (
  <Typography variant="body2" gutterBottom>
    {props.text}
  </Typography>
);

export default ParagraphComponent;
