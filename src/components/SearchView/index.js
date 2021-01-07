import SearchView from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAlbumSongs } from '../../actions/albumActions';
import { fetchArtistSongs } from '../../actions/artistActions';
import { fetchPlaylistSongs } from '../../actions/playlistActions';
import { updateHeaderTitle } from '../../actions/uiActions';
import { updateViewType } from '../../actions/songActions';

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    viewType: state.songsReducer.viewType,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    searchQuery: state.searchReducer.searchQuery
      ? state.searchReducer.searchQuery
      : '',
    searchedAlbums: state.searchReducer.searchedAlbums
      ? state.searchReducer.searchedAlbums
      : '',
    searchedArtists: state.searchReducer.searchedArtists
      ? state.searchReducer.searchedArtists
      : '',
    searchedPlaylists: state.searchReducer.searchedPlaylists
      ? state.searchReducer.searchedPlaylists
      : '',
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchAlbumSongs,
      fetchArtistSongs,
      fetchPlaylistSongs,
      updateHeaderTitle,
      updateViewType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
