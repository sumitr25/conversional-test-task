import { combineReducers } from 'redux';
import configReducer from '../containers/Dashboard/reducer';

export default combineReducers({ config: configReducer });
