import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { setToken } from './actions/tokenActions';
import { getTokenFromResponse } from './spotify';
import {
	playSong,
	stopSong,
	pauseSong,
	resumeSong,
} from './actions/songActions';
import Header from './components/Header';
import Footer from './components/Footer';
import UserPlaylists from './components/UserPlaylists';
import MainView from './components/MainView';
import MainHeader from './components/MainHeader';
import SideMenu from './components/SideMenu';
import './App.css';

class App extends Component {
	static audio;

	componentDidMount() {
		const hash = getTokenFromResponse();
		window.location.hash = '';
		const _token = hash.access_token;

		if (_token) {
			localStorage.setItem('token', _token);
		}
		this.props.setToken(localStorage.getItem('token'));

		setTimeout(() => {
			this.props.setToken('');
			localStorage.removeItem('token');
		}, 3000000);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.token) {
			this.props.fetchUser(nextProps.token);
		}

		if (this.audio !== undefined) {
			this.audio.volume = nextProps.volume / 100;
		}
	}

	stopSong = () => {
		if (this.audio) {
			this.props.stopSong();
			this.audio.pause();
		}
	};

	pauseSong = () => {
		if (this.audio) {
			this.props.pauseSong();
			this.audio.pause();
		}
	};

	resumeSong = () => {
		if (this.audio) {
			this.props.resumeSong();
			this.audio.play();
		}
	};

	audioControl = (song) => {
		const { playSong, stopSong } = this.props;

		if (this.audio === undefined) {
			playSong(song.track);
			this.audio = new Audio(song.track.preview_url);
			this.audio.play();
		} else {
			stopSong();
			this.audio.pause();
			playSong(song.track);
			this.audio = new Audio(song.track.preview_url);
			this.audio.play();
		}
	};

	render() {
		return (
			<div className="App">
				<div className="app-container">
					<div className="left-side-section">
						<SideMenu />
						<UserPlaylists />
					</div>
					<div className="main-section">
						<Header />
						<div className="main-section-container">
							<MainHeader />
							<MainView
								pauseSong={this.pauseSong}
								resumeSong={this.resumeSong}
								audioControl={this.audioControl}
							/>
						</div>
					</div>
					<div className="app-footer">
						<Footer
							token={this.props.token}
							stopSong={this.stopSong}
							pauseSong={this.pauseSong}
							resumeSong={this.resumeSong}
							audioControl={this.audioControl}
						/>
					</div>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	token: PropTypes.string,
	fetchUser: PropTypes.func,
	setToken: PropTypes.func,
	pauseSong: PropTypes.func,
	playSong: PropTypes.func,
	stopSong: PropTypes.func,
	resumeSong: PropTypes.func,
	volume: PropTypes.number,
};

const mapStateToProps = (state) => {
	return {
		token: state.tokenReducer.token,
		volume: state.soundReducer.volume,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			fetchUser,
			setToken,
			playSong,
			stopSong,
			pauseSong,
			resumeSong,
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
