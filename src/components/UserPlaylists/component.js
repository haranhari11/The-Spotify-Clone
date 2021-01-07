import React, { Component } from 'react';
import './UserPlaylists.css';

class UserPlaylists extends Component {
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.userId !== '' && nextProps.token !== '') {
			this.props.fetchPlaylistsMenu(nextProps.userId, nextProps.token);
		}
	}

	renderPlaylists() {
		return this.props.playlistMenu.map((playlist) => {
			const getPlaylistSongs = () => {
				this.props.fetchPlaylistSongs(
					playlist.owner.id,
					playlist.id,
					this.props.token
				);
				this.props.updateHeaderTitle(playlist.name);
				this.props.updateViewType('playlist');
			};

			return (
				<li
					onClick={getPlaylistSongs}
					className={
						this.props.title === playlist.name
							? 'active user-playlist-item'
							: 'user-playlist-item'
					}
					key={playlist.id}
				>
					{playlist.name}
				</li>
			);
		});
	}

	render() {
		return this.props.token ? (
			<div className="user-playlist-container">
				{this.props.playlistMenu && this.renderPlaylists()}
			</div>
		) : null;
	}
}

export default UserPlaylists;
