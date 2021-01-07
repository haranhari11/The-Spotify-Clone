import React, { useState } from 'react';
import './UserDetails.css';

import DefaultUser from '../../assets/icons/defaultUser';

const UserDetails = ({ user, setToken, updateHeaderTitle, updateViewType }) => {
	const [open, setOpen] = useState(false);

	const imageLength = Array.isArray(user.images) ? user.images.length : 0;

	const toggleOpen = () => {
		setOpen((open) => !open);
	};

	const logout = () => {
		updateHeaderTitle('Home');
		updateViewType('home');
		setToken('');
		localStorage.removeItem('token');
	};

	return (
		<div className="user-details">
			<div className="user-details-container" onClick={toggleOpen}>
				{imageLength !== 0 ? (
					<img alt="user" className="user-image" src={user.images[0].url} />
				) : (
					<div className="default-user">
						<DefaultUser />
					</div>
				)}
				<p className="user-name">{user.display_name}</p>
				<div className="user-dropdown">
					{open ? (
						<i className="up fas fa-sort-up " />
					) : (
						<i className="down fas fa-sort-down " />
					)}
				</div>
			</div>
			<ul
				className="user-info-options"
				style={{ display: open ? 'block' : 'none' }}
			>
				<li>
					<a
						href="https://www.spotify.com/in/account/overview/?utm_source=play&utm_campaign=wwwredirect"
						target="_blank"
						rel="noopener noreferrer"
					>
						Account
					</a>
				</li>
				<li>
					<a
						href={`https://open.spotify.com/user/${user.id}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						Profile
					</a>
				</li>
				<li onClick={logout}>
					<span>Log out</span>
				</li>
			</ul>
		</div>
	);
};

export default UserDetails;
