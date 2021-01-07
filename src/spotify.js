export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '';
const redirectUri = 'http://localhost:3000/';
const scopes = [
	'user-top-read',
	'user-read-playback-position',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing',
	'playlist-modify-public',
	'playlist-modify-private',
	'playlist-read-private',
	'playlist-read-collaborative',
	'user-follow-modify',
	'user-follow-read',
	'user-library-modify',
	'user-library-read',
	'user-read-email',
	'user-read-private',
];

export const getTokenFromResponse = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			let parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
