import Header from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchCategories,
  fetchNewReleases,
  fetchFeatured,
} from '../../actions/browseActions';
import { updateHeaderTitle } from '../../actions/uiActions';
import { updateViewType } from '../../actions/songActions';
import { fetchAlbums } from '../../actions/albumActions';
import { fetchArtists } from '../../actions/artistActions';

const mapStateToProps = (state) => {
  return {
    headerTitle: state.uiReducer.title,
    viewType: state.songsReducer.viewType,
    playlists: state.playlistReducer.playlists,
    artists: state.artistsReducer.artistList
      ? state.artistsReducer.artistList
      : [],
    albums: state.albumsReducer.albumList ? state.albumsReducer.albumList : [],
    token: state.tokenReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchCategories,
      fetchNewReleases,
      updateHeaderTitle,
      updateViewType,
      fetchFeatured,
      fetchAlbums,
      fetchArtists,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
