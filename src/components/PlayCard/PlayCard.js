import React from 'react';
import { useDispatch } from 'react-redux';
import './Card.css';

import DefaultImage from '../../assets/images/defaultArtist';
import { setSearchQuery } from '../../actions/searchAction';

const PlayCard = ({
	items,
	fetchSongs,
	updateTitle,
	updateType,
	token,
	type,
}) => {
	const dispatch = useDispatch(setSearchQuery);
	const renderCards = () => {
		return items.map((item, i) => {
			const cardSongsAction = (item, token) => {
				if (
					type === 'playlists' ||
					type === 'featured playlists' ||
					type === 'categoryPlaylist'
				) {
					fetchSongs(item.owner.id, item.id, token);
					updateTitle(item.name);
					type === 'playlists'
						? updateType('searchPlaylist')
						: type === 'featured playlists'
						? updateType('featuredPlaylist')
						: updateType('categoryPlaylist');
				} else if (type === 'albums' || type === 'new Releases') {
					dispatch(setSearchQuery(''));
					fetchSongs(item.id, token);
					updateTitle(item.name);
					type === 'albums'
						? updateType('searchAlbum')
						: updateType('newReleases');
				} else if (type === 'artists') {
					fetchSongs(item.id, token);
					updateTitle(item.name);
					updateType('searchArtist');
				} else if (type === 'Albums') {
					dispatch(setSearchQuery(''));
					fetchSongs(item.album.id, token);
					updateTitle(item.album.name);
					updateType('Album');
				} else if (type === 'Artists') {
					fetchSongs(item.id, token);
					updateTitle(item.name);
					updateType('Artist');
				} else if (type === 'Playlists') {
					fetchSongs(item.owner.id, item.id, token);
					updateTitle(item.name);
					updateType('playlist');
				} else {
					fetchSongs(item.id, token);
					updateTitle(item.name);
					updateType('searchSong');
				}
			};
			return type === 'Albums' ? (
				<li
					onClick={() => {
						cardSongsAction(item, token);
					}}
					className="card-item"
					key={i}
				>
					<div>
						<div className={'card-image'}>
							{item.album.images[0] ? (
								<img
									alt="card_image"
									loading="lazy"
									src={item.album.images[0] ? item.album.images[0].url : ''}
								/>
							) : (
								<div className={'default-card-image'}>
									<DefaultImage />
								</div>
							)}
							<div className="card-play-song">
								<i className="fas fa-play play-btn" aria-hidden="true" />
							</div>
						</div>

						<div className="card-details">
							<p className="card-name">{item.album.name}</p>
							<p className={'card-artist-name'}>{item.album.artists[0].name}</p>
						</div>
					</div>
				</li>
			) : (
				<li
					onClick={() => {
						cardSongsAction(item, token);
					}}
					className="card-item"
					key={i}
				>
					<div>
						<div
							className={
								type === 'artists' || type === 'Artists'
									? 'card-artist-image'
									: 'card-image'
							}
						>
							{item.images[0] ? (
								<img
									alt="card_image"
									loading="lazy"
									src={item.images[0] ? item.images[0].url : ''}
								/>
							) : (
								<div
									className={
										type === 'artists' || type === 'Artists'
											? 'default-card-artist-image'
											: 'default-card-image'
									}
								>
									<DefaultImage />
								</div>
							)}
							<div className="card-play-song">
								<i className="fas fa-play play-btn" aria-hidden="true" />
							</div>
						</div>

						<div className="card-details">
							<p className="card-name">{item.name}</p>
							<p
								className={
									type === 'artists' || type === 'Artists'
										? 'card-artist-type'
										: 'card-artist-name'
								}
							>
								{type === 'playlists' ||
								type === 'Playlists' ||
								type === 'featured playlists' ||
								type === 'categoryPlaylist'
									? item.owner.display_name
									: type === 'artists' || type === 'Artists'
									? item.type
									: item.artists[0].name}
							</p>
						</div>
					</div>
				</li>
			);
		});
	};

	return (
		<div className="play-cards">
			{type !== 'categoryPlaylist' ? (
				<h3 className="card-types">{type !== 'Songs' ? type : 'Songs'}</h3>
			) : null}
			<ul className="card-view-container">{items && renderCards()}</ul>
		</div>
	);
};

export default PlayCard;
