import categoryPlayList from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchPlaylistsMenu,
  fetchPlaylistSongs,
} from '../../actions/playlistActions';
import { updateHeaderTitle } from '../../actions/uiActions';
import { updateViewType } from '../../actions/songActions';

const mapStateToProps = (state) => {
  return {
    categoryPlaylist: state.browseReducer.categoryPlaylist,
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    viewType: state.songsReducer.viewType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateHeaderTitle,
      fetchPlaylistsMenu,
      fetchPlaylistSongs,
      updateViewType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(categoryPlayList);
