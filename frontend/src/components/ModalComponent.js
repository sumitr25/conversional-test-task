import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const ModalComponent = (props) => {
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {props.children}
    </Dialog>
  )
};

export default ModalComponent;
