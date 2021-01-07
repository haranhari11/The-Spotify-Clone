import React, { useState } from 'react';
import './VolumeControls.css';

const VolumeControls = ({ volume, updateVolume }) => {
	const [volumeState, setVolumeState] = useState(volume);

	const volumeUpdate = (e) => {
		setVolumeState(e.target.value);

		updateVolume(Math.ceil(e.target.value / 10) * 10);
	};

	return (
		<div className="volume-container">
			<i className="fas fa-volume-up" aria-hidden="true" />
			<input
				className="volume"
				type="range"
				min={0}
				max={100}
				value={volumeState}
				onChange={volumeUpdate}
			/>
		</div>
	);
};

export default VolumeControls;
