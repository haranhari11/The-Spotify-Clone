import Search from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  searchSongs,
  searchAlbums,
  searchArtists,
  searchPlaylists,
} from '../../actions/searchAction';

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      searchSongs,
      searchAlbums,
      searchArtists,
      searchPlaylists,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
