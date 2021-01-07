import React from 'react';
import './ArtistList.css';

import PlayCard from '../PlayCard/PlayCard';

const ArtistList = ({
	artists,
	fetchArtistSongs,
	token,
	updateHeaderTitle,
	updateViewType,
}) => {
	return (
		<div className="library-artists-container">
			<PlayCard
				items={artists}
				fetchSongs={fetchArtistSongs}
				updateTitle={updateHeaderTitle}
				updateType={updateViewType}
				token={token}
				type="Artists"
			/>
		</div>
	);
};

export default ArtistList;
