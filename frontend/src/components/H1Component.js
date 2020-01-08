import React from 'react';
import Typography from '@material-ui/core/Typography';

const H1Component = (props) => (
  <Typography variant="h1" component="h2" gutterBottom>
    {props.text}
  </Typography>
);

export default H1Component;
