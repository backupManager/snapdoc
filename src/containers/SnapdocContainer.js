import { connect } from 'react-redux';
import { setSelectedTab } from '../actions';
import Snapdoc from '../components/Snapdoc.ios';

const mapStateToProps = (state) => {
  return {
    activeTab: state.selectedTab
  };
};

const mapDispatchToProps = (dispatch) => {
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
