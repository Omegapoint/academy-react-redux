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
		// const color = e.target.value;
		// TODO: Task 3 - change background color by setting state.
	};

	render() {
		return (
			<div className="App container" style={{ background: this.state.bgColor}}>
				<div className="App-header" style={{fontFamily: 'Pacifico'}}>
					<p>Lab 2</p>
					<p className="App-header-description">
						~ Öppna upp lab-2-readme.md och följ instruktionerna ~
					</p>
				</div>
				<BackgroundColorPicker onChange={(this.changeBackgroundColor)}/>
				<List title={'*Insert title'} items={/*TODO: Task 4 */[]}/>
			</div>
		);
	}
}

export default App;
