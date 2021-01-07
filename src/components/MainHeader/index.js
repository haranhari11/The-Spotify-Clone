import MainHeader from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    headerTitle: state.uiReducer.title,
    viewType: state.songsReducer.viewType,
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
    categories: state.browseReducer.categories
      ? state.browseReducer.categories
      : [],
    categoryPlaylist: state.browseReducer.categoryPlaylist,
  };
};

export default connect(mapStateToProps)(MainHeader);
