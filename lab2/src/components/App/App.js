import React, {Component} from 'react';
import {getUsers} from '../../api';
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
        return {
          users: users
        }
      })
    })
  }

  changeBackgroundColor = (e) => {
    // const color = e.target.value;
    // TODO: Task 3 - change background color by setting state.
  };

  render() {
    return (
        <div className="App container" style={{background: this.state.bgColor}}>
          <div className="App-header">
            <p>Lab 2</p>
            <p className="App-header-description">
              <span role="img" aria-label="female technologist">👩‍💻</span> Öppna upp README.md och
              följ instruktionerna <span role="img" aria-label="male technologist">👨‍💻</span>
            </p>
          </div>
          <BackgroundColorPicker onChange={(this.changeBackgroundColor)}/>
          <List title={/*TODO: Task 2*/'*Insert title'} items={/*TODO: Task 4 */[]}/>
        </div>
    );
  }
}

export default App;
