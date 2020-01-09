import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getConfig } from './reducer';
import { parser } from '../../utils/parser';

const Dashboard = (props) => {
  // props.getConfig();

  useEffect(() => {
    props.getConfig()
  }, []);

  return (<div>{props.config && parser(props.config, 'Dashboard')}</div>);
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
