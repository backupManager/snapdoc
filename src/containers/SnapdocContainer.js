import { connect } from 'react-redux';
import {
  setSelectedTab,
  toggleCameraAnimation,
  toggleDocumentModal
} from '../actions';
import Snapdoc from '../components/Snapdoc.ios';

const mapStateToProps = (state) => {
  return {
    captureInProgress: state.cameraReducer.captureInProgress,
    modalVisible: state.cameraReducer.modalVisible,
    selectedTab: state.tabBarReducer.selectedTab
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
