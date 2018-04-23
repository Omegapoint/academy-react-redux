import React, { Component } from 'react';
import SearchBar from './SearchBar';

class List extends Component {

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
		return (
			<div>
				<h1>I am {this.props.title}</h1>
				<SearchBar onKeyPressed={this.onKeyPressed}/>
				<ul className="list-group">
					{this.props.items.length > 0 && this.filterListItemsBySearchTerm(this.state.searchTerm).map(this.renderListItem)}
				</ul>
			</div>
		);
	}
}

export default List;
