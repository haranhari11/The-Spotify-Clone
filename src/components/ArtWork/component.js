import React from 'react';
import './ArtWork.css';
import SongTrack from '../../assets/icons/songTrack';
const ArtWork = ({ viewType, albumImage }) => {
	const result = albumImage.hasOwnProperty('album');
	return (
		<div className="album-artwork-container">
			{result &&
			viewType !== 'Album' &&
			viewType !== 'searchAlbum' &&
			viewType !== 'newReleases' ? (
				<img
					alt=""
					className="album-artwork"
					src={albumImage.album.images[0].url}
				/>
			) : (
				<div className="default-artwork">
					<SongTrack />
				</div>
			)}
		</div>
	);
};

export default ArtWork;
