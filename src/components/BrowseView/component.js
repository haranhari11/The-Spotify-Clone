import React, { useEffect } from 'react';
import './BrowseView.css';

const BrowseView = ({
	categories,
	token,
	fetchCategories,
	updateHeaderTitle,
	fetchCategoryPlaylist,
	updateViewType,
}) => {
	useEffect(() => {
		fetchCategories(token);
	}, [token, fetchCategories]);
	const renderCategories = () => {
		return categories.map((item, i) => {
			const getPlaylist = () => {
				fetchCategoryPlaylist(token, item.id);
				updateHeaderTitle(item.name);
				updateViewType('category playlist');
			};

			return (
				<li onClick={getPlaylist} className="category-item" key={i}>
					<div className="category-image-container">
						<img
							alt="category"
							className="category-image"
							src={item.icons ? item.icons[0].url : item.images[0].url}
						/>

						<p className="category-name">{item.name}</p>
					</div>
				</li>
			);
		});
	};

	return (
		<React.Fragment>
			<h3 className="category-list-name">Browse All</h3>
			<ul className="browse-view-container">
				{categories && renderCategories()}
			</ul>
		</React.Fragment>
	);
};

export default BrowseView;
