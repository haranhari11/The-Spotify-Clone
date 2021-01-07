import React, { useEffect, useState } from 'react';
import './TrackSearch.css';

import SearchIcon from '../../assets/icons/searchIcon';

const Search = ({
	searchSongs,
	searchAlbums,
	searchArtists,
	searchPlaylists,
	token,
}) => {
	const [query, setQuery] = useState('');

	useEffect(() => {
		if (query.length >= 0) {
			searchSongs(query, token);
			searchAlbums(query, token);
			searchArtists(query, token);
			searchPlaylists(query, token);
		}
	}, [query, token, searchSongs, searchAlbums, searchArtists, searchPlaylists]);

	useEffect(() => {
		return () => setQuery('');
	}, []);

	return (
		<div className="track-search-container">
			<div>
				<button>
					<SearchIcon />
				</button>
				<input
					className="search-input"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					type="text"
					maxLength="80"
					autoCapitalize="false"
					autoCorrect="false"
					spellCheck="false"
					autoFocus={true}
					placeholder="Search for Artists, Songs, or Podcasts"
				/>
			</div>
		</div>
	);
};

export default Search;
