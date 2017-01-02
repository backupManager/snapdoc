export const toggleCameraAnimation = (captureInProgress) => {
  return {
      type: 'TOGGLE_CAMERA_ANIMATION',
      captureInProgress
  };
};

export const toggleDocumentModal = (modalVisible) => {
  return {
    type: 'TOGGLE_DOCUMENT_MODAL',
    modalVisible
  };
};

export const setSelectedTab = (tab) => {
  return {
    type: 'SET_SELECTED_TAB',
    tab
  };
};
