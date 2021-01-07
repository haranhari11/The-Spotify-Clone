import React from 'react';
import UserDetails from '../UserDetails';
import Search from '../Search';
import './Header.css';

import ForwardIcon from '../../assets/icons/forwardIcon';
import BackwardIcon from '../../assets/icons/backwardIcon';
import { loginUrl } from '../../spotify';

const Header = ({
	fetchAlbums,
	fetchArtists,
	updateHeaderTitle,
	updateViewType,
	headerTitle,
	viewType,
	token,
}) => {
	return (
		<div className="header">
			<div className=" header-container">
				<div className="header-left">
					<div className="navigation-buttons">
						<div className="backward-button">
							<BackwardIcon />
						</div>
						<div className="forward-button">
							<ForwardIcon />
						</div>
					</div>

					{headerTitle === 'Search' && <Search />}

					{headerTitle === 'Library' && (
						<div>
							<div className="library-headers">
								<p
									className={viewType === 'PlayLists' ? 'active' : ''}
									onClick={() => {
										updateViewType('PlayLists');
										updateHeaderTitle('Library');
									}}
								>
									PlayLists
								</p>
								<p
									className={viewType === 'Artists' ? 'active' : ''}
									onClick={() => {
										fetchArtists(token);
										updateViewType('Artists');
										updateHeaderTitle('Library');
									}}
								>
									Artists
								</p>
								<p
									className={viewType === 'Albums' ? 'active' : ''}
									onClick={() => {
										fetchAlbums(token);
										updateViewType('Albums');
										updateHeaderTitle('Library');
									}}
								>
									Albums
								</p>
							</div>
						</div>
					)}
				</div>

				<div className="header-right">
					{token ? (
						<div className="loggedIn-header">
							{headerTitle !== 'Search' && headerTitle !== 'Library' && (
								<div className="upgrade">
									<a
										href="https://www.spotify.com/in/premium/"
										target="_blank"
										rel="noopener noreferrer"
										title="Upgrade to Premium"
									>
										<span> Upgrade </span>
									</a>
								</div>
							)}
							<UserDetails />
						</div>
					) : (
						<div className="loggedOut-header">
							<div className="signUp">
								<a
									href="https://www.spotify.com/in/signup/"
									target="_blank"
									rel="noopener noreferrer"
									title="Sign Up"
								>
									<span>Sign Up</span>
								</a>
							</div>
							<div className="logIn">
								<a href={loginUrl}>
									<span>Log In</span>
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
