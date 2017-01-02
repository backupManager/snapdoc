const tabBarReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_TAB':
      return { selectedTab: action.tab };
    default:
      return { selectedTab: 'cameraTab' };
  };
};

export default tabBarReducer;
