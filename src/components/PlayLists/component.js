import React from 'react';
import './PlayLists.css';

import PlayCard from '../PlayCard/PlayCard';

const PlayLists = ({
	playlistMenu,
	fetchPlaylistSongs,
	token,
	updateHeaderTitle,
	updateViewType,
}) => {
	return (
		<div className="library-playlists-container">
			<PlayCard
				items={playlistMenu}
				fetchSongs={fetchPlaylistSongs}
				updateTitle={updateHeaderTitle}
				updateType={updateViewType}
				token={token}
				type="Playlists"
			/>
		</div>
	);
};

export default PlayLists;
