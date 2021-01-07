import SongControls from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    albumImage: state.songsReducer.songDetails
      ? state.songsReducer.songDetails
      : '',
    viewType: state.songsReducer.viewType,
  };
};

export default connect(mapStateToProps)(SongControls);
