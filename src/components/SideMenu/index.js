import SideMenu from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSongs, updateViewType } from '../../actions/songActions';
import { updateHeaderTitle } from '../../actions/uiActions';

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user ? state.userReducer.user : '',
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    title: state.uiReducer.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchSongs,
      updateViewType,
      updateHeaderTitle,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
