export const searchSongsPending = () => {
  return {
    type: 'SEARCH_SONGS_PENDING',
  };
};

export const searchSongsSuccess = (songs) => {
  return {
    type: 'SEARCH_SONGS_SUCCESS',
    songs,
  };
};

export const searchSongsError = () => {
  return {
    type: 'SEARCH_SONGS_ERROR',
  };
};

export const searchSongs = (query, accessToken) => {
  return (dispatch) => {
    const request = new Request(
      `https://api.spotify.com/v1/search?q=${query}&type=track&limit=12`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
          Accept: 'application/json',
        }),
      }
    );

    dispatch(searchSongsPending());

    fetch(request)
      .then((res) => {
        if (res.statusText === 'Unauthorized') {
          window.location.href = './';
        }
        return res.json();
      })
      .then((res) => {
        // map the response to match that returned from get song request
        res.items = res.tracks.items.map((item) => {
          return {
            track: item,
          };
        });
        dispatch(setSearchQuery(query));
        dispatch(searchSongsSuccess(res.items));
      })
      .catch((err) => {
        dispatch(searchSongsError(err));
      });
  };
};

export const searchArtistsPending = () => {
  return {
    type: 'SEARCH_ARTISTS_PENDING',
  };
};

export const searchArtistsSuccess = (searchedArtists) => {
  return {
    type: 'SEARCH_ARTISTS_SUCCESS',
    searchedArtists,
  };
};

export const searchArtistsError = () => {
  return {
    type: 'SEARCH_ARTISTS_ERROR',
  };
};

export const searchArtists = (query, accessToken) => {
  return (dispatch) => {
    const request = new Request(
      `https://api.spotify.com/v1/search?q=${query}&type=artist&limit=12`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
          Accept: 'application/json',
        }),
      }
    );

    dispatch(searchArtistsPending());

    fetch(request)
      .then((res) => {
        if (res.statusText === 'Unauthorized') {
          window.location.href = './';
        }
        return res.json();
      })
      .then((res) => {
        const key = Object.keys(res)[0];
        const result = res[key].items;
        dispatch(setSearchQuery(query));
        dispatch(searchArtistsSuccess(result));
      })
      .catch((err) => {
        dispatch(searchArtistsError(err));
      });
  };
};

export const searchAlbumsPending = () => {
  return {
    type: 'SEARCH_ALBUMS_PENDING',
  };
};

export const searchAlbumsSuccess = (searchedAlbums) => {
  return {
    type: 'SEARCH_ALBUMS_SUCCESS',
    searchedAlbums,
  };
};

export const searchAlbumsError = () => {
  return {
    type: 'SEARCH_ALBUMS_ERROR',
  };
};

export const searchAlbums = (query, accessToken) => {
  return (dispatch) => {
    const request = new Request(
      `https://api.spotify.com/v1/search?q=${query}&type=album&limit=12`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
          Accept: 'application/json',
        }),
      }
    );

    dispatch(searchAlbumsPending());

    fetch(request)
      .then((res) => {
        if (res.statusText === 'Unauthorized') {
          window.location.href = './';
        }
        return res.json();
      })
      .then((res) => {
        const key = Object.keys(res)[0];
        const result = res[key].items;
        dispatch(setSearchQuery(query));
        dispatch(searchAlbumsSuccess(result));
      })
      .catch((err) => {
        dispatch(searchAlbumsError(err));
      });
  };
};

export const searchPlaylistsPending = () => {
  return {
    type: 'SEARCH_PLAYLISTS_PENDING',
  };
};

export const searchPlaylistsSuccess = (searchedPlaylists) => {
  return {
    type: 'SEARCH_PLAYLISTS_SUCCESS',
    searchedPlaylists,
  };
};

export const searchPlaylistsError = () => {
  return {
    type: 'SEARCH_PLAYLISTS_ERROR',
  };
};

export const searchPlaylists = (query, accessToken) => {
  return (dispatch) => {
    const request = new Request(
      `https://api.spotify.com/v1/search?q=${query}&type=playlist&limit=12`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
          Accept: 'application/json',
        }),
      }
    );

    dispatch(searchPlaylistsPending());

    fetch(request)
      .then((res) => {
        if (res.statusText === 'Unauthorized') {
          window.location.href = './';
        }
        return res.json();
      })
      .then((res) => {
        const key = Object.keys(res)[0];
        const result = res[key].items;
        dispatch(setSearchQuery(query));
        dispatch(searchPlaylistsSuccess(result));
      })
      .catch((err) => {
        dispatch(searchPlaylistsError(err));
      });
  };
};

export const setSearchQuery = (searchQuery) => {
  return {
    type: 'SET_SEARCH_QUERY',
    searchQuery,
  };
};
