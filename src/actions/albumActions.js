export const fetchAlbumsPending = () => {
  return {
    type: 'FETCH_ALBUMS_PENDING',
  };
};

export const fetchAlbumsSuccess = (albums) => {
  return {
    type: 'FETCH_ALBUMS_SUCCESS',
    albums,
  };
};

export const fetchAlbumsError = () => {
  return {
    type: 'FETCH_ALBUMS_ERROR',
  };
};

export const fetchAlbums = (accessToken) => {
  return (dispatch) => {
    const request = new Request(`https://api.spotify.com/v1/me/albums`, {
      headers: new Headers({
        Authorization: 'Bearer ' + accessToken,
      }),
    });

    dispatch(fetchAlbumsPending());

    fetch(request)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let albumIds = res.items.map((album) => album.album.id);
        dispatch(setAlbumIds(albumIds.toString()));
        dispatch(fetchAlbumsSuccess(res.items));
      })
      .catch((err) => {
        dispatch(fetchAlbumsError(err));
      });
  };
};

export const fetchAlbumSongsPending = () => {
  return {
    type: 'FETCH_ALBUM_SONGS_PENDING',
  };
};

export const fetchAlbumSongsSuccess = (songs) => {
  return {
    type: 'FETCH_ALBUM_SONGS_SUCCESS',
    songs,
  };
};

export const fetchAlbumSongsError = () => {
  return {
    type: 'FETCH_ALBUM_SONGS_ERROR',
  };
};

export const fetchAlbumSongs = (albumId, accessToken) => {
  return (dispatch) => {
    const request = new Request(
      `https://api.spotify.com/v1/albums/${albumId}/tracks?limit=50`,
      {
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
        }),
      }
    );

    dispatch(fetchAlbumSongsPending());

    fetch(request)
      .then((res) => {
        if (res.statusText === 'Unauthorized') {
          window.location.href = './';
        }
        return res.json();
      })
      .then((res) => {
        // map the response to match that returned from get song request
        res.items = res.items.map((item) => {
          return {
            track: item,
          };
        });
        dispatch(fetchAlbumSongsSuccess(res.items));
      })
      .catch((err) => {
        dispatch(fetchAlbumSongsError(err));
      });
  };
};

export const setAlbumIds = (albumIds) => {
  return {
    type: 'SET_ALBUM_IDS',
    albumIds,
  };
};
