import React from 'react';
import components from '../components';
import modules from '../modules';

export const parser = (pageConfig, key, parentState, parentFunction) => {
  const { Content, Children } = pageConfig;
  const { type, injectedProps }= Content;

  let props = Content.props;

  if (injectedProps) {
    const { states, functions } = injectedProps;

    const injectedStates = states && Object.keys(states).reduce((accumulator, current) => {
      accumulator[current] = parentState[states[current]];
      return accumulator;
    }, {});
  
    const injectedFunctions = functions && Object.keys(functions).reduce((accumulator, current) => {
      accumulator[current] = parentFunction[functions[current]];
      return accumulator;
    }, {});
    
    props = {
      ...Content.props,
      ...injectedStates,
      ...injectedFunctions,
    }
  }

  const Component = components[type];

  if (!Component) {
    throw Error(`Not a component!! ${Content.type}`);
  }

  if (Children) {
    const children = Object.keys(Children).map(key => parser(Children[key], key, parentState, parentFunction));
    return <Component {...props} children={children} key={key} />
  }
  return <Component {...props} key={key} />
}

export const getComponentFromConfig = (config, name) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      const injectModules = config.Content.injectModules;

      this.state = (injectModules || []).map(mod => modules[mod.name].states(mod.stateKey, mod.initialValue)).reduce((acc, cur) => {
        return {
          ...acc,
          ...cur,
        }
      }, {});

      this.functions = (injectModules || []).map(mod => modules[mod.name].functions(this, mod.stateKey)).reduce((acc, cur) => {
        return {
          ...acc,
          ...cur,
        }
      }, {});
    }

    render() {
      return (
        <div>
          {
            parser(
              config, 
              name, 
              this.state, 
              this.functions,
            )
          }
        </div>
      );
    }
  };
}
