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

	onKeyPressed = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	};

	filterListItemsBySearchTerm = (searchTerm) => {
		return this.props.items
			.filter(item => {
				return item.name.toLowerCase().includes(searchTerm.toLowerCase())
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
						{this.props.items.length > 0 && 
							filteredItems.map((item, index) => (
								<li className="list-group-item" key={index}>{item.name}</li>
							))
						}
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
