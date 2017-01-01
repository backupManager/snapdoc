import { combineReducers } from 'redux';

const tabBar = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_TAB':
      return { selectedTab: action.tab };
    default:
      return { selectedTab: 'cameraTab' };
  };
};

export default tabBar;
