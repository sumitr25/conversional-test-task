import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getConfig } from './reducer';
import { getWrapped } from '../../utils/parser';

const Dashboard = (props) => {

  useEffect(() => {
    props.getConfig()
  }, []);

  if (props.config) {
    const Component = getWrapped(props.config, 'Dashboard');
    return <Component />
  }

  return <div></div>;
}

const mapDispatchToProps = { getConfig };

const mapStateToProps = (state) => {
  return {
    config: state.dashboard.dashboard,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
