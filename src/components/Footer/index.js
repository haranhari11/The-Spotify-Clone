import React from 'react';
import SongControls from '../SongControls';
import './Footer.css';

const Footer = ({ token, stopSong, pauseSong, resumeSong, audioControl }) => (
	<div className={token ? 'footer' : 'footer-banner'}>
		{token ? (
			<SongControls
				stopSong={stopSong}
				pauseSong={pauseSong}
				resumeSong={resumeSong}
				audioControl={audioControl}
			/>
		) : (
			<div className="banner">
				<div className="banner-content">
					<h2 className="banner-text">The spotify clone</h2>
					<p className="banner-para">
						This is a clone website of The Spotify intended to be an exercise in
						web application building - not for profit/commercial use. If you are
						looking for the real app go to open.spotify.com
					</p>
				</div>
				<div className="signup-free">
					<a
						href="https://spotify.com/signup"
						target="_blank"
						rel="noopener noreferrer"
						title="Upgrade to Premium"
					>
						<span> sign up free </span>
					</a>
				</div>
			</div>
		)}
	</div>
);

export default Footer;
