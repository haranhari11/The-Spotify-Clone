const defaultState = {
  albumIds: '',
};

export const albumsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ALBUM_IDS':
      return {
        ...state,
        albumIds: action.albumIds,
      };

    case 'FETCH_ALBUMS_PENDING':
      return {
        ...state,
        fetchAlbumsPending: true,
      };

    case 'FETCH_ALBUMS_SUCCESS':
      return {
        ...state,
        albumList: action.albums,
        fetchAlbumsError: false,
        fetchAlbumsPending: false,
      };

    case 'FETCH_ALBUMS_ERROR':
      return {
        ...state,
        fetchAlbumsError: true,
        fetchAlbumsPending: false,
      };

    default:
      return state;
  }
};

export default albumsReducer;
