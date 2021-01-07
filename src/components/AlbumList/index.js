import AlbumList from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAlbumSongs } from '../../actions/albumActions';
import { updateHeaderTitle } from '../../actions/uiActions';
import { updateViewType } from '../../actions/songActions';

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    albums: state.albumsReducer.albumList ? state.albumsReducer.albumList : '',
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchAlbumSongs,
      updateHeaderTitle,
      updateViewType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
