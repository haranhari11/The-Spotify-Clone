import SongList from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSongs } from '../../actions/songActions';

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
    fetchSongsError: state.songsReducer.fetchSongsError,
    fetchSongsPending: state.songsReducer.fetchSongsPending,
    fetchPlaylistSongsPending: state.songsReducer.fetchPlaylistSongsPending,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    songAddedId: state.userReducer.songId || '',
    viewType: state.songsReducer.viewType,
    headerTitle: state.uiReducer.title,
    playlists: state.playlistReducer.playlists,
    artists: state.artistsReducer.artistList
      ? state.artistsReducer.artistList
      : [],
    albums: state.albumsReducer.albumList ? state.albumsReducer.albumList : [],
    searchedPlaylists: state.searchReducer.searchedPlaylists
      ? state.searchReducer.searchedPlaylists
      : [],
    searchedArtists: state.searchReducer.searchedArtists
      ? state.searchReducer.searchedArtists
      : [],
    searchedAlbums: state.searchReducer.searchedAlbums
      ? state.searchReducer.searchedAlbums
      : [],
    newReleases: state.browseReducer.newReleases,
    featured: state.browseReducer.featured,
    categoryPlaylist: state.browseReducer.categoryPlaylist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchSongs,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
