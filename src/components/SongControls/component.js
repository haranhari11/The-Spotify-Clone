import React, { Component } from 'react';
import moment from 'moment/moment';

import ArtWork from '../ArtWork';
import VolumeControls from '../VolumeControls';
import './SongControls.css';

class SongControls extends Component {
	state = {
		timeElapsed: this.props.timeElapsed,
	};

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (!nextProps.songPlaying) {
			clearInterval(this.state.intervalId);
		}

		if (nextProps.songPlaying && nextProps.timeElapsed === 0) {
			clearInterval(this.state.intervalId);
			this.calculateTime();
		}

		this.setState({
			timeElapsed: nextProps.timeElapsed,
		});
	}

	calculateTime() {
		const intervalId = setInterval(() => {
			if (this.state.timeElapsed === 30) {
				clearInterval(this.state.intervalId);
				this.props.stopSong();
			} else if (!this.props.songPaused) {
				this.props.increaseSongTime(this.state.timeElapsed + 1);
			}
		}, 1000);

		this.setState({
			intervalId: intervalId,
		});
	}

	getSongIndex = () => {
		const { songs, songDetails } = this.props;
		const currentIndex = songs
			.map((song, index) => {
				if (song.track === songDetails) {
					return index;
				} else {
					return undefined;
				}
			})
			.filter((item) => {
				return item !== undefined;
			})[0];

		return currentIndex;
	};

	nextSong = () => {
		const { songs, audioControl } = this.props;
		let currentIndex = this.getSongIndex();
		currentIndex === songs.length - 1
			? audioControl(songs[0])
			: audioControl(songs[currentIndex + 1]);
	};

	prevSong = () => {
		const { songs, audioControl } = this.props;
		let currentIndex = this.getSongIndex();
		currentIndex === 0
			? audioControl(songs[songs.length - 1])
			: audioControl(songs[currentIndex - 1]);
	};

	resume = () => {
		this.props.resumeSong();
		this.calculateTime();
	};

	render() {
		const showPlay = this.props.songPaused
			? 'far fa-play-circle play-btn'
			: 'far fa-pause-circle pause-btn';

		return (
			<div className="song-player-container">
				<div className="song-player-container-left">
					{this.props.songName ? <ArtWork /> : null}
					<div className="song-details">
						<p className="song-track-name">{this.props.songName}</p>
						<p className="song-artist-name">{this.props.artistName}</p>
					</div>
				</div>
				<div className="song-player-container-middle">
					<div className="song-controls">
						<div onClick={this.prevSong} className="reverse-song">
							<i className="fas fa-step-backward reverse" aria-hidden="true" />
						</div>

						<div className="play-btn">
							<i
								onClick={
									!this.props.songPaused ? this.props.pauseSong : this.resume
								}
								className={'far play-btn' + showPlay}
								aria-hidden="true"
							/>
						</div>

						<div onClick={this.nextSong} className="next-song">
							<i className="fas fa-step-forward forward" aria-hidden="true" />
						</div>
					</div>

					<div className="song-progress-container">
						<p className="timer-start">
							{moment()
								.minutes(0)
								.second(this.state.timeElapsed)
								.format('m:ss')}
						</p>
						<div className="song-progress">
							<div
								style={{ width: this.state.timeElapsed * 16.5 }}
								className="song-expired"
							/>
						</div>
						<p className="timer-end">
							{moment()
								.minutes(0)
								.second(30 - this.state.timeElapsed)
								.format('m:ss')}
						</p>
					</div>
				</div>
				<div className="song-player-container-right">
					<VolumeControls />
				</div>
			</div>
		);
	}
}

export default SongControls;
