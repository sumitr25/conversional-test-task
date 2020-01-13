import React from 'react';
import Link from '@material-ui/core/Link';

const LinkComponent = (props) => (
  <Link href={props.url} target="_blank" onClick={()=>console.log('Link Clicked')}>
    {props.text}
  </Link>
);

export default LinkComponent;
