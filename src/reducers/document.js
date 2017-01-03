const documentReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FILE_CATEGORY':
      return {
        fileCategory: action.fileCategory,
        fileName: state.fileName || null,
        filePath: state.filePath,
        modalVisible: true
      };
    case 'SET_FILE_NAME':
      return {
        fileCategory: state.fileCategory || null,
        fileName: action.fileName,
        filePath: state.filePath,
        modalVisible: true
      };
    case 'SET_FILE_PATH':
      return {
        fileCategory: null,
        filePath: action.filePath,
        fileName: '',
        modalVisible: false
      };
    case 'TOGGLE_DOCUMENT_MODAL':
      return {
        fileCategory: state.fileCategory,
        modalVisible: action.modalVisible,
        filePath: state.filePath,
        fileName: state.fileName
      };
    default:
      return {
        fileCategory: null,
        modalVisible: false,
        fileName: state.fileName || null,
        filePath: state.filePath || null
      };
  };
};

export default documentReducer;
