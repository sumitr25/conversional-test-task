import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const ListComponent = (props) => (
  <List>
    {(props.li || [] ).map(text => (
      <ListItem key={text}>
        <ListItemIcon>
          <FiberManualRecordIcon />
        </ListItemIcon>
        <ListItemText
          primary={text}
        />
      </ListItem>
    ))}
  </List>
);

export default ListComponent;
