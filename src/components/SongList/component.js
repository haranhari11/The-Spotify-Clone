import React from 'react';
import moment from 'moment/moment';
import { usePalette } from 'react-palette';
import './SongList.css';

import MenuIcon from '../../assets/icons/menuIcon';
import FollowIcon from '../../assets/icons/followIcon';
import FollowedIcon from '../../assets/icons/followedIcon';
import SongImage from '../../assets/images/songs.png';
import Equalizer from '../../assets/images/equalizer.gif';
const SongList = ({
	viewType,
	token,
	songAddedId,
	songId,
	songs,
	fetchSongsError,
	fetchSongsPending,
	fetchPlaylistSongsPending,
	fetchSongs,
	audioControl,
	songPaused,
	songPlaying,
	resumeSong,
	pauseSong,
	playlists,
	artists,
	albums,
	searchedAlbums,
	searchedArtists,
	searchedPlaylists,
	newReleases,
	featured,
	headerTitle,
	categoryPlaylist,
}) => {
	if (
		token !== '' &&
		!fetchSongsError &&
		fetchSongsPending &&
		viewType === 'songs'
	) {
		fetchSongs(token);
	}

	let IMAGE_URL;
	let currentPlaylist;
	let currentArtist;
	let currentAlbum;
	let currentSearchAlbum;

	if (viewType === 'playlist') {
		currentPlaylist = playlists.filter((playlist) => {
			return playlist.name === headerTitle;
		})[0];
	}

	if (viewType === 'searchPlaylist') {
		currentPlaylist = searchedPlaylists.filter((playlist) => {
			return playlist.name === headerTitle;
		})[0];
	}

	if (viewType === 'featuredPlaylist') {
		currentPlaylist = featured.filter((playlist) => {
			return playlist.name === headerTitle;
		})[0];
	}

	if (viewType === 'categoryPlaylist') {
		currentPlaylist = categoryPlaylist.filter((playlist) => {
			return playlist.name === headerTitle;
		})[0];
	}

	if (viewType === 'Artist' && artists.length > 0) {
		currentArtist = artists.filter((artist) => {
			return artist.name === headerTitle;
		})[0];
	}

	if (viewType === 'searchArtist' && searchedArtists.length > 0) {
		currentArtist = searchedArtists.filter((artist) => {
			return artist.name === headerTitle;
		})[0];
	}

	if (viewType === 'Album' && albums.length > 0) {
		currentAlbum = albums.filter((album) => {
			return album.album.name === headerTitle;
		})[0];
	}

	if (viewType === 'newReleases' && newReleases.length > 0) {
		currentSearchAlbum = newReleases.filter((album) => {
			return album.name === headerTitle;
		})[0];
	}

	if (viewType === 'searchAlbum' && searchedAlbums.length > 0) {
		currentSearchAlbum = searchedAlbums.filter((album) => {
			return album.name === headerTitle;
		})[0];
	}

	if (
		viewType === 'playlist' ||
		viewType === 'searchPlaylist' ||
		viewType === 'featuredPlaylist' ||
		viewType === 'categoryPlaylist'
	) {
		IMAGE_URL = currentPlaylist.images[0].url;
	} else if (viewType === 'Artist' || viewType === 'searchArtist') {
		IMAGE_URL = currentArtist.images[0].url;
	} else if (viewType === 'searchAlbum' || viewType === 'newReleases') {
		IMAGE_URL = currentSearchAlbum.images[0].url;
	} else if (viewType === 'Album') {
		IMAGE_URL = currentAlbum.album.images[0].url;
	} else {
		IMAGE_URL = SongImage;
	}

	const { data } = usePalette(IMAGE_URL);

	const msToMinutesAndSeconds = (ms) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	};

	const renderSongs = () => {
		return songs.map((song, i) => {
			const buttonClass =
				song.track.id === songId && !songPaused ? 'fa-pause' : 'fa-play';
			const activeClass =
				song.track.id === songId && !songPaused
					? 'active-play-icon'
					: 'play-icon';
			return (
				<li
					className={
						song.track.id === songId
							? 'song-active user-song-item'
							: 'user-song-item'
					}
					key={i}
				>
					<div className="user-song-item-left">
						<div
							onClick={() => {
								song.track.id === songId && !songPlaying && songPaused
									? resumeSong()
									: songPlaying && !songPaused && song.track.id === songId
									? pauseSong()
									: audioControl(song);
							}}
							className="play-song"
						>
							<i
								className={`${activeClass} fas ${buttonClass} `}
								aria-hidden="true"
							/>
							{song.track.id === songId && !songPaused ? (
								<div className="song-equalizer-container">
									<img
										className="song-equalizer"
										width="14"
										height="14"
										alt=""
										src={Equalizer}
									/>
								</div>
							) : (
								<h4 className="song-index">{i + 1}</h4>
							)}
						</div>
						<div className="song-title">
							{viewType !== 'Album' &&
							viewType !== 'searchAlbum' &&
							viewType !== 'newReleases' &&
							song.track.album.images[2] ? (
								<img src={song.track.album.images[2].url} alt="" />
							) : null}
							<div
								className={
									viewType !== 'Album' &&
									viewType !== 'searchAlbum' &&
									viewType !== 'newReleases'
										? 'song-title-info'
										: 'song-title-info-album'
								}
							>
								<p className="song-tracks-name">{song.track.name}</p>
								<p className="song-artists-name">
									{viewType !== 'Artist' && viewType !== 'searchArtist'
										? song.track.artists[0].name
										: null}
								</p>
							</div>
						</div>
					</div>

					<div className="song-album">
						{viewType !== 'Album' &&
							viewType !== 'searchAlbum' &&
							viewType !== 'newReleases' && (
								<p className="song-albums-name">{song.track.album.name}</p>
							)}
					</div>

					<div className="song-added">
						{viewType !== 'Album' &&
							viewType !== 'searchAlbum' &&
							viewType !== 'newReleases' &&
							viewType !== 'Artist' &&
							viewType !== 'searchArtist' && (
								<p className="song-added-name">
									{moment(song.added_at).format('ll')}
								</p>
							)}
					</div>

					<div className="song-length">
						{viewType !== 'songs' && (
							<p className="add-song">
								{songAddedId === song.track.id ? (
									<i className="fas fa-heart added-song" aria-hidden="true" />
								) : (
									<i className="far fa-heart add-song" aria-hidden="true" />
								)}
							</p>
						)}

						{viewType === 'songs' && (
							<p className="added-song">
								<i className="fas fa-heart" aria-hidden="true" />
							</p>
						)}

						<p className="song-track-duration">
							{msToMinutesAndSeconds(song.track.duration_ms)}
						</p>
					</div>
				</li>
			);
		});
	};

	return token ? (
		<div className="songs-list">
			<div
				className="songs-list-overlay"
				style={
					viewType !== 'category playlist'
						? { backgroundColor: data.darkVibrant }
						: {
								backgroundColor: '#83a0ad',
						  }
				}
			></div>
			<div className="songs-list-buttons">
				<div className="songs-play-button-container">
					<div
						onClick={!songPaused ? pauseSong : resumeSong}
						className="songs-play-button"
					>
						<i
							className={
								songPaused
									? 'play-button fas fa-play'
									: 'pause-button fas fa-pause'
							}
							aria-hidden="true"
						/>
					</div>
				</div>
				{viewType !== 'songs' ? (
					<div className="notInSongs">
						<div className="songs-follow-button-container">
							<div
								className={
									viewType !== 'Artist' && viewType !== 'searchArtist'
										? 'songs-follow-button'
										: 'songs-follow-button-artist'
								}
							>
								{viewType !== 'Artist' && viewType !== 'searchArtist' ? (
									<div>
										{viewType !== 'searchPlaylist' &&
										viewType !== 'searchAlbum' &&
										viewType !== 'featuredPlaylist' &&
										viewType !== 'newReleases' &&
										viewType !== 'categoryPlaylist' ? (
											<FollowedIcon />
										) : (
											<FollowIcon />
										)}
									</div>
								) : (
									<span className="follow">
										{viewType !== 'Artist' ? 'follow' : 'following'}
									</span>
								)}
							</div>
						</div>
						<div
							className={
								viewType !== 'Artist' && viewType !== 'searchArtist'
									? 'songs-menu-button-container'
									: 'songs-menu-button-container-artist'
							}
						>
							<div className="songs-menu-button">
								<MenuIcon />
							</div>
						</div>
					</div>
				) : null}
			</div>
			<div className="songs-container">
				<div className="song-header-container">
					<div className="song-title-header">
						<span>#</span>
						<p>Title</p>
					</div>
					<div className="song-album-header">
						{viewType !== 'Album' &&
							viewType !== 'searchAlbum' &&
							viewType !== 'newReleases' && <p>Album</p>}
					</div>
					<div className="song-added-header">
						{viewType !== 'Album' &&
							viewType !== 'searchAlbum' &&
							viewType !== 'newReleases' &&
							viewType !== 'Artist' &&
							viewType !== 'searchArtist' && <p>Date Added</p>}
					</div>
					<div className="song-length-header">
						<p>
							<i className="far fa-clock" aria-hidden="true" />
						</p>
					</div>
				</div>
				{songs &&
					!fetchSongsPending &&
					!fetchPlaylistSongsPending &&
					renderSongs()}
			</div>
		</div>
	) : null;
};

export default SongList;
