import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';

import "./List.css";

class List extends Component {

	static defaultProps = {
		items: []
	};

	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ''
		}
	}

	renderListItem(item, index) {
		return (
			<li className="list-group-item" key={index}>{item.name}</li>
		)
	}

	onKeyPressed = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	};

	filterListItemsBySearchTerm = (search) => {
		return this.props.items
			.filter(item => {
				return item.name.toLowerCase().includes(search.toLowerCase())
			})
	};

	render() {
		const filteredItems = this.filterListItemsBySearchTerm(this.state.searchTerm);
		return (
			<div className="List">
				<h2 className="List-title">{this.props.title}</h2>
				<SearchBar onKeyPressed={this.onKeyPressed}/>
				{this.props.items.length === 0 ? (<div>Empty list...</div>) : (
					<ul className="list-group">
						{this.props.items.length > 0 && filteredItems.map(this.renderListItem)}
					</ul>
				)}
			</div>
		);
	}
}

List.propTypes = {
	items: PropTypes.array
};

export default List;
