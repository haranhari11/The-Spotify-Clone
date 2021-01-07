import HomeView from './component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateViewType } from '../../actions/songActions';
import { fetchNewReleases, fetchFeatured } from '../../actions/browseActions';
import { updateHeaderTitle } from '../../actions/uiActions';
import { fetchPlaylistSongs } from '../../actions/playlistActions';
import { fetchAlbumSongs } from '../../actions/albumActions';

const mapStateToProps = (state) => {
  return {
    headerTitle: state.uiReducer.title,
    viewType: state.songsReducer.viewType,
    token: state.tokenReducer.token,
    newReleases: state.browseReducer.newReleases,
    featured: state.browseReducer.featured,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchNewReleases,
      updateHeaderTitle,
      updateViewType,
      fetchFeatured,
      fetchPlaylistSongs,
      fetchAlbumSongs,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
