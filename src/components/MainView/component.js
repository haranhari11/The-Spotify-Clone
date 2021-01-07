import React from 'react';
import SongList from '../SongList';
import AlbumList from '../AlbumList';
import ArtistList from '../ArtistList';
import PlayLists from '../PlayLists';
import HomeView from '../HomeView';
import SearchView from '../SearchView';
import CategoryPlayList from '../CategoryPlaylist';
import './MainView.css';

const MainView = ({
	headerTitle,
	audioControl,
	resumeSong,
	pauseSong,
	viewType,
}) => {
	return (
		<React.Fragment>
			{viewType === 'Albums' ? (
				<AlbumList />
			) : viewType === 'Artists' ? (
				<ArtistList />
			) : viewType === 'PlayLists' ? (
				<PlayLists />
			) : headerTitle === 'Search' ? (
				<SearchView
					resumeSong={resumeSong}
					pauseSong={pauseSong}
					audioControl={audioControl}
				/>
			) : headerTitle === 'Home' ? (
				<HomeView />
			) : viewType === 'category playlist' ? (
				<CategoryPlayList />
			) : (
				<SongList
					resumeSong={resumeSong}
					pauseSong={pauseSong}
					audioControl={audioControl}
				/>
			)}
		</React.Fragment>
	);
};

export default MainView;
