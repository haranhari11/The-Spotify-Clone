const defaultState = {
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  viewType: 'songs',
  songPaused: true,
};

export const songsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_VIEW_TYPE':
      return {
        ...state,
        viewType: action.view,
      };

    case 'SET_SONGS_IDS':
      return {
        ...state,
        songsIds: action.songsIds,
      };

    case 'FETCH_SONGS_PENDING':
      return {
        ...state,
        fetchSongsPending: true,
      };

    case 'FETCH_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        fetchSongsError: false,
        fetchSongsPending: false,
        viewType: 'songs',
      };

    case 'FETCH_SONGS_ERROR':
      return {
        ...state,
        fetchSongsError: true,
        fetchSongsPending: false,
      };

    case 'SEARCH_SONGS_PENDING':
      return {
        ...state,
        searchSongsPending: true,
      };

    case 'SEARCH_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        searchSongsError: false,
        searchSongsPending: false,
      };

    case 'SEARCH_SONGS_ERROR':
      return {
        ...state,
        searchSongsError: true,
        searchSongsPending: false,
      };

    case 'FETCH_PLAYLIST_SONGS_PENDING':
      return {
        ...state,
        fetchPlaylistSongsPending: true,
      };

    case 'FETCH_PLAYLIST_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        fetchPlaylistSongsError: false,
        fetchPlaylistSongsPending: false,
      };

    case 'FETCH_PLAYLIST_SONGS_ERROR':
      return {
        ...state,
        fetchPlaylistSongsError: true,
        fetchPlaylistSongsPending: false,
      };

    case 'FETCH_ALBUM_SONGS_PENDING':
      return {
        ...state,
        fetchAlbumSongsPending: true,
      };

    case 'FETCH_ALBUM_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        fetchAlbumSongsError: false,
        fetchAlbumSongsPending: false,
      };

    case 'FETCH_ALBUM_SONGS_ERROR':
      return {
        ...state,
        fetchAlbumSongsError: true,
        fetchAlbumSongsPending: false,
      };

    case 'FETCH_ARTIST_SONGS_PENDING':
      return {
        ...state,
        fetchArtistSongsPending: true,
      };

    case 'FETCH_ARTIST_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        fetchArtistSongsError: false,
        fetchArtistSongsPending: false,
      };

    case 'FETCH_ARTIST_SONGS_ERROR':
      return {
        ...state,
        fetchArtistSongsError: true,
        fetchArtistSongsPending: false,
      };

    case 'PLAY_SONG':
      return {
        ...state,
        songPlaying: true,
        songDetails: action.song,
        songId: action.song.id,
        timeElapsed: 0,
        songPaused: false,
      };

    case 'STOP_SONG':
      return {
        ...state,
        songPlaying: false,
        songDetails: null,
        timeElapsed: 0,
        songPaused: true,
      };

    case 'PAUSE_SONG':
      return {
        ...state,
        songPlaying: false,
        songPaused: true,
      };

    case 'RESUME_SONG':
      return {
        ...state,
        songPlaying: true,
        songPaused: false,
      };

    case 'INCREASE_SONG_TIME':
      return {
        ...state,
        timeElapsed: action.time,
      };

    default:
      return state;
  }
};

export default songsReducer;
