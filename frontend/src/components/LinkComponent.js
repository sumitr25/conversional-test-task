import React from 'react';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const LinkComponent = (props) => (
  <Link href={props.url} target="_blank" onClick={() => props.onClick && props.onClick()}>
    {props.text}
  </Link>
);

LinkComponent.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default LinkComponent;
