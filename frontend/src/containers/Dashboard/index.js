import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getConfig } from './reducer';
import { getWrapped } from '../../utils/parser';

const Dashboard = (props) => {

  useEffect(() => {
    if (!props.config) {
      props.getConfig(props.location)
    }
  }, [props.location]);

  if (props.config) {
    const Component = getWrapped(props.config, props.location);
    return <Component />
  }

  return <div></div>;
}

const mapDispatchToProps = { getConfig };

const mapStateToProps = (state, props) => {
  const location = props.location.pathname;
  return {
    location,
    config: state.config[location],
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
