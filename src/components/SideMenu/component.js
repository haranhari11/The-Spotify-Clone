import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SideMenu.css';

import HomeIcon from '../../assets/icons/homeIcon';
import HomeActiveIcon from '../../assets/icons/homeActiveIcon';
import SearchIcon from '../../assets/icons/searchIcon';
import LibraryIcon from '../../assets/icons/libraryIcon';
import PlayListIcon from '../../assets/icons/playListIcon';
import SpotifyLogo from '../../assets/images/spotifyLogo';

const SideMenu = ({
	updateHeaderTitle,
	updateViewType,
	fetchSongs,
	token,
	title,
}) => {
	const handleClick = (name) => {
		updateHeaderTitle(name);
		updateViewType(name);
	};

	const handleBrowseClick = () => {
		updateHeaderTitle('Home');
		updateViewType('home');
	};

	const handleSearchClick = () => {
		updateHeaderTitle('Search');
		updateViewType('search');
	};

	const handleLibraryClick = () => {
		updateHeaderTitle('Library');
		updateViewType('PlayLists');
	};

	const handleLikedSongsClick = () => {
		fetchSongs(token);
		handleClick('Songs');
	};

	const handleToastClick = () => {
		toast('PLEASE! LOGIN TO EXPLORE', {
			className: 'custom-toast',
			position: 'top-center',
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	};

	return (
		<div className="side-menu">
			<div className="spotify-logo">
				<SpotifyLogo />
			</div>
			<div className="side-menu-container">
				<div
					onClick={token ? handleBrowseClick : handleToastClick}
					className={
						title === 'Home' ? 'active side-menu-item' : 'side-menu-item'
					}
				>
					<div className="item-container">
						<span className="item-icon">
							{title === 'Home' ? <HomeActiveIcon /> : <HomeIcon />}
						</span>
						<span className="item-name">Home</span>
					</div>
				</div>
				<div
					onClick={token ? handleSearchClick : handleToastClick}
					className={
						title === 'Search' ? 'active side-menu-item' : 'side-menu-item'
					}
				>
					<div className="item-container">
						<span className="item-icon">
							<SearchIcon />
						</span>
						<span className="item-name">Search</span>
					</div>
				</div>
				<div
					onClick={token ? handleLibraryClick : handleToastClick}
					className={
						title === 'Library' ? 'active side-menu-item' : 'side-menu-item'
					}
				>
					<div className="item-container">
						<span className="item-icon">
							<LibraryIcon />
						</span>
						<span className="item-name">Your Library</span>
					</div>
				</div>

				<div className="second-menu-item">
					<h3>PlayLists</h3>
					<div className="menu-container">
						<span className="playlist-icon">
							<PlayListIcon />
						</span>
						<span className="menu-name">Create Playist</span>
					</div>

					<div
						className={
							title === 'Songs' ? 'actives menu-container' : 'menu-container'
						}
						onClick={token ? handleLikedSongsClick : handleToastClick}
					>
						<span className="songs-icon">
							<i className="fas fa-heart"></i>
						</span>
						<span className="menu-name">Liked Songs</span>
					</div>
				</div>
				<hr className="playlist-seperator" />
			</div>
			<ToastContainer limit={1} closeButton={false} />
		</div>
	);
};

export default SideMenu;
