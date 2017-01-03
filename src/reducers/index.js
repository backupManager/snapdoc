import { combineReducers } from 'redux';
import cameraReducer from './camera';
import documentReducer from './document';
import tabBarReducer from './tabBar';

const rootReducer = combineReducers({
  cameraReducer,
  documentReducer,
  tabBarReducer
});

export default rootReducer;
