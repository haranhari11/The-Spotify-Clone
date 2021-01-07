import React, { useEffect } from 'react';
import './HomeView.css';

import PlayCard from '../PlayCard/PlayCard';
import spotify from '../../assets/images/spotify.png';

const HomeView = ({
	fetchNewReleases,
	updateHeaderTitle,
	updateViewType,
	fetchFeatured,
	token,
	featured,
	newReleases,
	fetchPlaylistSongs,
	fetchAlbumSongs,
}) => {
	useEffect(() => {
		fetchNewReleases(token);
		fetchFeatured(token);
	}, [token, fetchNewReleases, fetchFeatured]);
	return token ? (
		<div className="homeView-container">
			<PlayCard
				items={featured}
				fetchSongs={fetchPlaylistSongs}
				updateTitle={updateHeaderTitle}
				updateType={updateViewType}
				token={token}
				type="featured playlists"
			/>
			<PlayCard
				items={newReleases}
				fetchSongs={fetchAlbumSongs}
				updateTitle={updateHeaderTitle}
				updateType={updateViewType}
				token={token}
				type="new Releases"
			/>
		</div>
	) : (
		<div className="welcome-container">
			<img src={spotify} alt="spotify logo" />
			<h2>
				Hey!{' '}
				<span role="img" aria-label="Hey">
					👋
				</span>
			</h2>
			<p>
				Please! <span className="text-login">Login</span>{' '}
				<span role="img" aria-label="Key">
					🔑
				</span>{' '}
				to Explore{' '}
				<span role="img" aria-label="Eye">
					👀
				</span>{' '}
				Spotify Clone
			</p>
		</div>
	);
};

export default HomeView;
