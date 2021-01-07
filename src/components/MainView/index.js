import MainView from './component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateViewType } from '../../actions/songActions';

const mapStateToProps = (state) => {
  return {
    headerTitle: state.uiReducer.title,
    viewType: state.songsReducer.viewType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateViewType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
