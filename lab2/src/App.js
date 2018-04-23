import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import { getUsers } from './api';
import BackgroundColorPicker from './components/BackgroundColorPicker';

class App extends Component {
	state = {
		users: [],
		bgColor: '#ff0'
	};

	componentDidMount() {
		getUsers().then(users => {
			this.setState(() => {
				return { users }
			})
		})
	}

	changeBackgroundColor = (e) => {
		this.setState({
			bgColor: e.target.value
		})
	};

	render() {
		return (
			<div className="container" style={{ background: this.state.bgColor}}>
				<BackgroundColorPicker onChange={this.changeBackgroundColor}/>
				<List title={'my title'} items={this.state.users}/>
			</div>
		);
	}
}

export default App;
