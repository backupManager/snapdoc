const cameraReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_CAMERA_ANIMATION':
      return {
        captureInProgress: action.captureInProgress,
        modalVisible: false
      };
    case 'TOGGLE_DOCUMENT_MODAL':
      return {
        captureInProgress: false,
        modalVisible: action.modalVisible
      };
    default:
      return {
        captureInProgress: false,
        modalVisible: false
      };
  };
};

export default cameraReducer;
