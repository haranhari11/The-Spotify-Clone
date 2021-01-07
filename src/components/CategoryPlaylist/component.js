import React from 'react';
import './CategoryPlaylist.css';

import PlayCard from '../PlayCard/PlayCard';

const categoryPlaylist = ({
  updateHeaderTitle,
  fetchPlaylistSongs,
  updateViewType,
  token,
  categoryPlaylist,
}) => {
  return (
    <div className="category-playlist-container">
      <PlayCard
        items={categoryPlaylist}
        fetchSongs={fetchPlaylistSongs}
        updateTitle={updateHeaderTitle}
        updateType={updateViewType}
        token={token}
        type="categoryPlaylist"
      />
    </div>
  );
};

export default categoryPlaylist;
