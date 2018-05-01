import React, { Component } from 'react';
import { getUsers } from '../../api';
import List from '../List/List';
import BackgroundColorPicker from '../BackgroundColorPicker/BackgroundColorPicker';

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
        const color = e.target.value;
		this.setState({
			bgColor: color
		})
	};

	render() {
		return (
			<div className="App container" style={{ background: this.state.bgColor}}>
				<div className="App-header">
					<p>Lab 2</p>
					<p className="App-header-description">
						👩‍💻 Öppna upp README.md och följ instruktionerna 👨‍💻
					</p>
				</div>
				<BackgroundColorPicker onChange={(this.changeBackgroundColor)}/>
				<List title={'Users'} items={this.state.users}/>
			</div>
		);
	}
}

export default App;
