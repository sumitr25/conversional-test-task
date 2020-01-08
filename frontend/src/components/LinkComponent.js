import React from 'react';
import Link from '@material-ui/core/Link';

const LinkComponent = (props) => (
  <Link href="#" onClick={()=>console.log('Link Clicked')}>
    {props.text}
  </Link>
);

export default LinkComponent;
