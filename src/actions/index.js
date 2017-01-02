export const setSelectedTab = (tab) => {
  return {
    type: 'SET_SELECTED_TAB',
    tab
  };
};

export const toggleCameraAnimation = (captureInProgress) => {
  return {
      type: 'TOGGLE_CAMERA_ANIMATION',
      captureInProgress
  };
};
