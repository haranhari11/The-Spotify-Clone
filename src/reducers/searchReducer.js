export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    case 'SEARCH_ALBUMS_PENDING':
      return {
        ...state,
        searchAlbumsPending: true,
      };

    case 'SEARCH_ALBUMS_SUCCESS':
      return {
        ...state,
        searchedAlbums: action.searchedAlbums,
        searchAlbumsError: false,
        searchAlbumsPending: false,
      };

    case 'SEARCH_ALBUMS_ERROR':
      return {
        ...state,
        searchAlbumsError: true,
        searchAlbumsPending: false,
      };
    case 'SEARCH_ARTISTS_PENDING':
      return {
        ...state,
        searchArtistsPending: true,
      };

    case 'SEARCH_ARTISTS_SUCCESS':
      return {
        ...state,
        searchedArtists: action.searchedArtists,
        searchArtistsError: false,
        searchArtistsPending: false,
      };

    case 'SEARCH_ARTISTS_ERROR':
      return {
        ...state,
        searchArtistsError: true,
        searchArtistsPending: false,
      };
    case 'SEARCH_PLAYLISTS_PENDING':
      return {
        ...state,
        searchPlaylistsPending: true,
      };

    case 'SEARCH_PLAYLISTS_SUCCESS':
      return {
        ...state,
        searchedPlaylists: action.searchedPlaylists,
        searchPlaylistsError: false,
        searchPlaylistsPending: false,
      };

    case 'SEARCH_PLAYLISTS_ERROR':
      return {
        ...state,
        searchPlaylistsError: true,
        searchPlaylistsPending: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
