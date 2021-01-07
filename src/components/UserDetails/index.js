import UserDetails from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setToken } from '../../actions/tokenActions';
import { updateHeaderTitle } from '../../actions/uiActions';
import { updateViewType } from '../../actions/songActions';

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user ? state.userReducer.user : '',
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setToken,
      updateHeaderTitle,
      updateViewType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
