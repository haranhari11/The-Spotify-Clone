import React from 'react';
import './SearchView.css';

import BrowseView from '../BrowseView';
import PlayCard from '../PlayCard/PlayCard';

import SongTrack from '../../assets/icons/songTrack';
import Equalizer from '../../assets/images/equalizer.gif';

const SearchView = ({
	searchQuery,
	searchedAlbums,
	searchedArtists,
	searchedPlaylists,
	songs,
	fetchAlbumSongs,
	fetchArtistSongs,
	fetchPlaylistSongs,
	token,
	updateViewType,
	updateHeaderTitle,
	songId,
	audioControl,
	songPaused,
	songPlaying,
	resumeSong,
	pauseSong,
}) => {
	const msToMinutesAndSeconds = (ms) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	};

	const renderSearchSongs = () => {
		return songs.map((song, i) => {
			const result = song.track.hasOwnProperty('album');
			const buttonClass =
				song.track.id === songId && !songPaused ? 'fa-pause' : 'fa-play';
			return (
				<li
					className={
						song.track.id === songId
							? 'song-active search-song-item'
							: 'search-song-item'
					}
					key={i}
				>
					<div className="search-song-item-left">
						<div
							onClick={() => {
								song.track.id === songId && songPlaying && songPaused
									? resumeSong()
									: songPlaying && !songPaused && song.track.id === songId
									? pauseSong()
									: audioControl(song);
							}}
							className="play-song"
						>
							<i
								className={`play-icon fas ${buttonClass} `}
								aria-hidden="true"
							/>
							{song.track.id === songId && !songPaused ? (
								<div className="search-song-equalizer-container">
									<img
										className="search-song-equalizer"
										alt=""
										src={Equalizer}
									/>
								</div>
							) : null}
						</div>
						<div className="search-song-title">
							{result && song.track.album.images ? (
								<img
									className="search-image"
									src={song.track.album.images[2].url}
									alt=""
								/>
							) : (
								<div className="search-default-image">
									<SongTrack />
								</div>
							)}

							<div className={'search-song-title-info'}>
								<p className="search-song-tracks-name">{song.track.name}</p>
								<p className="search-song-artists-name">
									{song.track.artists[0].name}
								</p>
							</div>
						</div>
					</div>

					<div className="search-song-length">
						<p className="search-song-track-duration">
							{msToMinutesAndSeconds(song.track.duration_ms)}
						</p>
					</div>
				</li>
			);
		});
	};

	return searchQuery === '' ? (
		<BrowseView />
	) : (
		<div className="search-view">
			<div className="search-song-list-container">
				<h2 className="title-search-songs">Songs</h2>
				<ul className="search-song-list">{songs && renderSearchSongs()}</ul>
			</div>
			<PlayCard
				items={searchedArtists}
				fetchSongs={fetchArtistSongs}
				updateTitle={updateHeaderTitle}
				updateType={updateViewType}
				token={token}
				type="artists"
			/>
			<PlayCard
				items={searchedAlbums}
				fetchSongs={fetchAlbumSongs}
				updateTitle={updateHeaderTitle}
				updateType={updateViewType}
				token={token}
				type="albums"
			/>
			<PlayCard
				items={searchedPlaylists}
				fetchSongs={fetchPlaylistSongs}
				updateTitle={updateHeaderTitle}
				updateType={updateViewType}
				token={token}
				type="playlists"
			/>
		</div>
	);
};

export default SearchView;
