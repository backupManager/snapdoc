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

export const setFileCategory = (fileCategory) => {
  return {
    type: 'SET_FILE_CATEGORY',
    fileCategory
  };
};

export const setFileName = (fileName) => {
  return {
    type: 'SET_FILE_NAME',
    fileName
  };
};

export const setFilePath = (filePath) => {
  return {
    type: 'SET_FILE_PATH',
    filePath
  };
};

export const setSelectedTab = (tab) => {
  return {
    type: 'SET_SELECTED_TAB',
    tab
  };
};
