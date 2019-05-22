import React, {Component} from 'react';
import BackgroundColorPicker from '../BackgroundColorPicker/BackgroundColorPicker';
import List from '../List/List';
import {connect} from 'react-redux';
import {getAllUsers} from '../../actions/userActions';

import './Container.css';

class Container extends Component {

  // TODO: Task 5 - Get all users upon mounting the component

  render() {
    return (
        <div className="Container container" style={{background: this.props.backgroundColor}}>
          <div className="Container-header">
            <p>Lab 3</p>
            <p className="Container-header-description">
              <span role="img" aria-label="female technologist">👩‍💻</span> Öppna upp README.md och
              följ instruktionerna <span role="img" aria-label="male technologist">👨‍💻</span>
            </p>
          </div>
          <BackgroundColorPicker onChange={() => {
            console.log("FOO")
          }}/>
          <List title={'Users'} items={[]}/>
        </div>
    );
  }
}

// Maps the aplication state directly to component props
const mapStateToProps = (state) => {
  return {
    backgroundColor: state.background.bgColor
  };
};

// Maps the action creators through dispatch directly to component props
const mapDispatchToProps = {
  getAllUsers: getAllUsers
};

// Connects the component to the redux cycle
export default connect(mapStateToProps, mapDispatchToProps)(Container);
