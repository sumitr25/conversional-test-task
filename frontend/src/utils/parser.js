import React from 'react';
import componentsMapping from '../components/componentsMapping';

export const parser = (pageConfig, key) => {
  const { Content, Children } = pageConfig;
  const { type, props }= Content;

  const Component = componentsMapping[type];

  if (!Component) {
    throw Error(`Not a component!! ${Content.type}`);
  }

  if (Children) {
    const children = Object.keys(Children).map(key => parser(Children[key], key));
    return <Component children={children} key={key}/>
  }
  return <Component {...props} key={key}/>
}
