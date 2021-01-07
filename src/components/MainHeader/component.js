import React from 'react';
import './MainHeader.css';
import moment from 'moment/moment';
import { usePalette } from 'react-palette';

import SongImage from '../../assets/images/songs.png';
import VerifiedIcon from '../../assets/icons/verifiedIcon';
import DefaultImage from '../../assets/images/defaultArtist';

const MainHeader = ({
	headerTitle,
	viewType,
	playlists,
	artists,
	albums,
	searchedAlbums,
	searchedArtists,
	searchedPlaylists,
	newReleases,
	featured,
	categoryPlaylist,
	categories,
}) => {
	let IMAGE_URL;
	let currentPlaylist;
	let currentArtist;
	let currentAlbum;
	let currentSearchAlbum;
	let currentCategory;

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
	if (viewType === 'category playlist') {
		currentCategory = categories.filter((category) => {
			return category.name === headerTitle;
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
	} else if (viewType === 'category playlist') {
		IMAGE_URL = currentCategory.icons[0].url;
	} else {
		IMAGE_URL = SongImage;
	}

	const { data } = usePalette(IMAGE_URL);

	return (
		<div
			className={
				viewType !== 'Artists' &&
				viewType !== 'Albums' &&
				viewType !== 'PlayLists' &&
				headerTitle !== 'Library' &&
				headerTitle !== 'Search' &&
				headerTitle !== 'Home' &&
				viewType !== 'category playlist'
					? 'section-title'
					: viewType === 'category playlist'
					? 'categories-section'
					: 'main-section-title'
			}
			style={
				viewType !== 'Artists' &&
				viewType !== 'Albums' &&
				viewType !== 'PlayLists' &&
				headerTitle !== 'Library' &&
				headerTitle !== 'Search' &&
				headerTitle !== 'Home' &&
				viewType !== 'Artist' &&
				viewType !== 'searchArtist' &&
				viewType !== 'category playlist'
					? {
							backgroundColor: data.darkVibrant,
					  }
					: viewType === 'Artist' || viewType === 'searchArtist'
					? {
							backgroundImage: `url(${IMAGE_URL})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
					  }
					: viewType === 'category playlist'
					? {
							backgroundColor: '#83a0ad',
					  }
					: null
			}
		>
			{viewType === 'category playlist' && currentCategory && (
				<div className="current-category">
					<h2 className="current-category-name">{currentCategory.name}</h2>
				</div>
			)}

			{(viewType === 'playlist' ||
				viewType === 'searchPlaylist' ||
				viewType === 'featuredPlaylist' ||
				viewType === 'categoryPlaylist') && (
				<div className="playlist-title-container">
					<div className="playlist-image-container">
						{currentPlaylist.images[0] ? (
							<img
								alt="playlist"
								className="playlist-image"
								src={
									currentPlaylist.images[0] ? currentPlaylist.images[0].url : ''
								}
							/>
						) : (
							<div className="playlist-default-image">
								<DefaultImage />
							</div>
						)}
					</div>
					<div
						className={
							currentPlaylist.description === ''
								? 'playlist-info-container-desc'
								: headerTitle.length > 25
								? 'playlist-info-container-title'
								: 'playlist-info-container'
						}
					>
						<p className="playlist-text">{currentPlaylist.type}</p>
						<h3
							className={
								headerTitle.length > 25
									? 'header-title-small'
									: 'header-title-large'
							}
						>
							{headerTitle}
						</h3>

						<p className="playlist-desc">{currentPlaylist.description}</p>
						<p className="created-by">
							<span className="lighter-text">
								{currentPlaylist.owner.display_name}
							</span>
							<span className="total-songs">
								{currentPlaylist.tracks.total} songs
							</span>
						</p>
					</div>
				</div>
			)}

			{(viewType === 'Artist' || viewType === 'searchArtist') && currentArtist && (
				<div className="current-artist-header-container">
					<div className="curret-artist-image-container">
						{currentArtist.images[0] ? (
							<img
								alt="current-artist"
								className="current-artist-image"
								src={currentArtist.images[0] ? currentArtist.images[0].url : ''}
							/>
						) : (
							<div className="artist-default-image">
								<DefaultImage />
							</div>
						)}
					</div>
					<div className="current-artist-info">
						<p>
							<VerifiedIcon />
							<span className="artist-type">Verified {currentArtist.type}</span>
						</p>
						<h3
							className={
								currentArtist.name.length > 22 && currentArtist.name.length < 28
									? 'artist-header-name-medium'
									: currentArtist.name.length > 28
									? 'artist-header-name-small'
									: 'artist-header-name'
							}
						>
							{currentArtist.name}
						</h3>
						<p className="artist-followers">
							{currentArtist.followers.total.toLocaleString()} followers
						</p>
					</div>
				</div>
			)}

			{viewType === 'Album' && currentAlbum && (
				<div className="current-album-header-container">
					<div className="playlist-image-container">
						{currentAlbum.album.images[0] ? (
							<img
								alt="playlist"
								className="current-album-image"
								src={
									currentAlbum.album.images[0]
										? currentAlbum.album.images[0].url
										: ''
								}
							/>
						) : (
							<div className="album-default-image">
								<DefaultImage />
							</div>
						)}
					</div>
					<div
						className={
							headerTitle.length > 22 && headerTitle.length < 28
								? 'current-album-info-medium'
								: headerTitle.length > 28
								? 'current-album-info-small'
								: 'current-album-info'
						}
					>
						<p className="album-type">{currentAlbum.album.album_type}</p>
						<h3
							className={
								headerTitle.length > 22 && headerTitle.length < 28
									? 'album-header-title-medium'
									: headerTitle.length > 28
									? 'album-header-title-small'
									: 'album-header-title'
							}
						>
							{headerTitle}
						</h3>
						<p className="created-by">
							<span className="lighter-text">
								{currentAlbum.album.artists[0].name}
							</span>
							<span className="release-date">
								{moment(currentAlbum.album.release_date).format('YYYY')}
							</span>
							<span className="total-songs">
								{currentAlbum.album.tracks.total} songs
							</span>
						</p>
					</div>
				</div>
			)}

			{(viewType === 'searchAlbum' || viewType === 'newReleases') &&
				currentSearchAlbum && (
					<div className="current-album-header-container">
						<div className="playlist-image-container">
							{currentSearchAlbum.images[0] ? (
								<img
									alt="playlist"
									className="current-album-image"
									src={
										currentSearchAlbum.images[0]
											? currentSearchAlbum.images[0].url
											: ''
									}
								/>
							) : (
								<div className="album-default-image">
									<DefaultImage />
								</div>
							)}
						</div>
						<div
							className={
								headerTitle.length > 22 && headerTitle.length < 28
									? 'current-album-info-medium'
									: headerTitle.length > 28
									? 'current-album-info-small'
									: 'current-album-info'
							}
						>
							<p className="album-type">{currentSearchAlbum.album_type}</p>
							<h3
								className={
									headerTitle.length > 22 && headerTitle.length < 28
										? 'album-header-title-medium'
										: headerTitle.length > 28
										? 'album-header-title-small'
										: 'album-header-title'
								}
							>
								{headerTitle}
							</h3>
							<p className="created-by">
								<span className="lighter-text">
									{currentSearchAlbum.artists[0].name}
								</span>
								<span className="release-date">
									{moment(currentSearchAlbum.release_date).format('YYYY')}
								</span>
								<span className="total-songs">
									{currentSearchAlbum.total_tracks} songs
								</span>
							</p>
						</div>
					</div>
				)}

			{headerTitle === 'Songs' && (
				<div>
					<div className="liked-songs-header-container">
						<img alt="Liked Songs" className="playlist-image" src={SongImage} />
						<div className="liked-songs-info">
							<p className="liked-playlist-text">PlayList</p>
							<h3 className="liked-header-title">Liked Songs</h3>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MainHeader;
