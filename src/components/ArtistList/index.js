import ArtistList from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtistSongs } from '../../actions/artistActions';
import { updateHeaderTitle } from '../../actions/uiActions';
import { updateViewType } from '../../actions/songActions';

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    artists: state.artistsReducer.artistList
      ? state.artistsReducer.artistList
      : '',
    viewType: state.songsReducer.viewType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchArtistSongs,
      updateHeaderTitle,
      updateViewType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);
