import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';

const ModalComponent = (props) => (
  <Dialog
    open={props.isOpen}
    onClose={props.onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    {props.children}
  </Dialog>
);

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ModalComponent;
