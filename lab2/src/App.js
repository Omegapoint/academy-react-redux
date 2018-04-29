import React, { Component } from 'react';
import { getUsers } from './api';
import 'typeface-pacifico';
import List from './components/List/List';
import BackgroundColorPicker from './components/BackgroundColorPicker/BackgroundColorPicker';

import './App.css';

class App extends Component {
	state = {
		users: [],
		bgColor: 'lavender'
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
			<div className="App container" style={{ background: this.state.bgColor}}>
				<p className="App-header" style={{fontFamily: 'Pacifico'}}>
					<p>Lab 2</p>
					<p className="App-header-description">
						~ Öppna upp lab-2-readme.md och följ instruktionerna ~
					</p>
				</p>
				<BackgroundColorPicker onChange={this.changeBackgroundColor}/>
				<List title={'*Insert title'} items={this.state.users}/>
			</div>
		);
	}
}

export default App;
