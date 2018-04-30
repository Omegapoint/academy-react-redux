import React, { Component } from 'react';
import { getUsers } from '../../api';
import { Provider } from 'react-redux';
import 'typeface-pacifico';
import List from '../List/List';
import BackgroundColorPicker from '../BackgroundColorPicker/BackgroundColorPicker';
import configureStore from '../../store';

import './App.css';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

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
			<Provider store={store}>
				<div className="App container" style={{ background: this.state.bgColor }}>
					<div className="App-header" style={{ fontFamily: 'Pacifico' }}>
						<p>Lab 3</p>
						<p className="App-header-description">
							~ Öppna upp README.md och följ instruktionerna ~
					</p>
					</div>
					<BackgroundColorPicker onChange={(this.changeBackgroundColor)} />
					<List title={'Users'} items={this.state.users} />
				</div>
			</Provider>
		);
	}
}

export default App;
