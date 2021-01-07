export const browseReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: action.categories.items,
        fetchCategoriesError: false,
      };

    case 'FETCH_CATEGORIES_ERROR':
      return {
        ...state,
        fetchCategoriesError: true,
      };

    case 'FETCH_CATEGORY_PLAYLIST_SUCCESS':
      return {
        ...state,
        categoryPlaylist: action.categoryPlaylist,
        fetchCategoryPlaylistError: false,
      };

    case 'FETCH_CATEGORY_PLAYLIST_ERROR':
      return {
        ...state,
        fetchCategoryPlaylistError: true,
      };

    case 'FETCH_NEW_RELEASES_SUCCESS':
      return {
        ...state,
        newReleases: action.newReleases.items,
        fetchNewReleasesError: false,
      };

    case 'FETCH_NEW_RELEASES_ERROR':
      return {
        ...state,
        fetchNewReleasesError: true,
      };

    case 'FETCH_FEATURED_SUCCESS':
      return {
        ...state,
        featured: action.featured.items,
        fetchFeaturedError: false,
      };

    case 'FETCH_FEATURED_ERROR':
      return {
        ...state,
        fetchFeaturedError: true,
      };

    default:
      return state;
  }
};

export default browseReducer;
