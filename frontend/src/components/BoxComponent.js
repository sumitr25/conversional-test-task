import React from 'react';
import Box from '@material-ui/core/Box';

const BoxComponent = (props) => (
  <Box border={1}>{props.children}</Box>
);

export default BoxComponent;
