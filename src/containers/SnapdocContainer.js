import { connect } from 'react-redux';
import { setSelectedTab } from '../actions';
import Snapdoc from '../components/Snapdoc.ios';

const mapStateToProps = (state) => {
  return {
    captureInProgress: state.cameraReducer.captureInProgress,
    selectedTab: state.tabBarReducer.selectedTab
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Mapping dispatch to props.");
  return {
    onNewTabSelected: (tab) => {
      dispatch(setSelectedTab(tab))
    }
  };
};

const SnapdocContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Snapdoc);

export default SnapdocContainer;
