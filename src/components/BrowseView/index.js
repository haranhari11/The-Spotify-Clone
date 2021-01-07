import BrowseView from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylistSongs } from '../../actions/playlistActions';
import { updateViewType } from '../../actions/songActions';
import { updateHeaderTitle } from '../../actions/uiActions';
import {
  fetchCategories,
  fetchCategoryPlaylist,
} from '../../actions/browseActions';

const mapStateToProps = (state) => {
  return {
    categories: state.browseReducer.categories,
    viewType: state.songsReducer.viewType,
    token: state.tokenReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchPlaylistSongs,
      updateHeaderTitle,
      updateViewType,
      fetchCategories,
      fetchCategoryPlaylist,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseView);
