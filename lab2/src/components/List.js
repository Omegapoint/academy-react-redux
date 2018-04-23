import React, { Component } from 'react';
import { getUsers } from '../api';
import SearchBar from './SearchBar';

class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: [],
			searchTerm: ''
		}
	}

	componentDidMount() {
		getUsers().then(users => {
			this.setState(() => {
				return { users }
			})
		})
	}

	renderListItem(item, index) {
		return (
			<li key={index}>{item.name}</li>
		)
	}

	onKeyPressed = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	};

	filterSearch = (search) => {
		return this.state.users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
	};

	render() {
		return (
			<div>
				<h1>I am {this.props.title}</h1>
				<SearchBar onKeyPressed={this.onKeyPressed}/>
				<ul>
					{this.state.users.length > 0 && this.filterSearch(this.state.searchTerm).map(this.renderListItem)}
				</ul>
			</div>
		);
	}
}

export default List;
