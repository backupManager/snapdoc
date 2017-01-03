import { connect } from 'react-redux';
import {
  setFileCategory,
  setFileName,
  setFilePath,
  setSelectedTab,
  toggleCameraAnimation,
  toggleDocumentModal
} from '../actions';
import Snapdoc from '../components/Snapdoc.ios';

const mapStateToProps = (state) => {
  return {
    captureInProgress: state.cameraReducer.captureInProgress,
    fileName: state.documentReducer.fileName,
    fileCategory: state.documentReducer.fileCategory,
    modalVisible: state.documentReducer.modalVisible,
    filePath: state.documentReducer.filePath,
    selectedTab: state.tabBarReducer.selectedTab
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFileCategory: (fileCategory) => {
      dispatch(setFileCategory(fileCategory));
    },
    setFileName: (fileName) => {
      dispatch(setFileName(fileName));
    },
    setFilePath: (filePath) => {
      dispatch(setFilePath(filePath));
    },
    setSelectedTab: (tab) => {
      dispatch(setSelectedTab(tab))
    },
    onTakePicture: (captureInProgress) => {
      dispatch(toggleCameraAnimation(captureInProgress));
    },
    setModalVisible: (modalVisible) => {
      dispatch(toggleDocumentModal(modalVisible));
    }
  };
};

const SnapdocContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Snapdoc);

export default SnapdocContainer;
