import { combineReducers } from 'redux';
import cameraReducer from './camera';
import tabBarReducer from './tabBar';

const rootReducer = combineReducers({
  cameraReducer,
  tabBarReducer
});

export default rootReducer;
