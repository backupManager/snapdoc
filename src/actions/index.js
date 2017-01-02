export const setSelectedTab = (tab) => {
  return {
    type: 'SET_SELECTED_TAB',
    tab
  };
};

export const startCameraAnimation = (captureInProgress) => {
  return {
      type: 'START_CAMERA_ANIMATION',
      captureInProgress
  };
};
