import React from 'react';
import Typography from '@material-ui/core/Typography';

const H2Component = (props) => (
  <Typography variant="h2" gutterBottom>
    {props.text}
  </Typography>
);

export default H2Component;
