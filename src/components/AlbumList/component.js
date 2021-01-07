import React from 'react';
import './AlbumList.css';

import PlayCard from '../PlayCard/PlayCard';

const AlbumList = ({
	albums,
	fetchAlbumSongs,
	token,
	updateHeaderTitle,
	updateViewType,
	albumContains,
}) => {
	return (
		<div className="library-albums-container">
			<PlayCard
				items={albums}
				follow={albumContains}
				fetchSongs={fetchAlbumSongs}
				updateTitle={updateHeaderTitle}
				updateType={updateViewType}
				token={token}
				type="Albums"
			/>
		</div>
	);
};

export default AlbumList;
