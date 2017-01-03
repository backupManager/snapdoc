const cameraReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_CAMERA_ANIMATION':
      return {
        captureInProgress: action.captureInProgress
      };
    default:
      return {
        captureInProgress: false
      };
  };
};

export default cameraReducer;
