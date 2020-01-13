import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getConfig } from './reducer';
import { getComponentFromConfig } from '../../utils/parser';
import CircularProgress from '@material-ui/core/CircularProgress';
import H2Component from '../../components/H2Component'

const Main = (props) => {

  useEffect(() => {
    if (!props.config) {
      props.getConfig(props.location)
    }
  }, [props.location]);

  if (props.config) {
    const Component = getComponentFromConfig(props.config, props.location);
    return <Component />
  }

  if(props.error) {
    return (
      <div>
        <H2Component text={props.error}/>
      </div>
    );
  }

  return (
    <div>
      <CircularProgress />  
    </div>
  );
}

const mapDispatchToProps = { getConfig };

const mapStateToProps = (state, props) => {
  const location = props.location.pathname;
  return {
    location,
    config: state.config[location],
    error: state.config.error
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
