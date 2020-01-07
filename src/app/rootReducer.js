import { combineReducers } from 'redux';
import dashboardReducer from '../containers/Dashboard/reducer';

export default combineReducers({ dashboard: dashboardReducer });
