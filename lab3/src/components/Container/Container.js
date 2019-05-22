import React, {Component} from 'react';
import BackgroundColorPicker from '../BackgroundColorPicker/BackgroundColorPicker';
import List from '../List/List';
import UserDetails from '../UserDetails/UserDetails';
import {connect} from 'react-redux';
import {getAllUsers} from '../../actions/userActions';

import './Container.css';

class Container extends Component {

  componentDidMount() {
    this.props.getAllUsers();
  }

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
          <UserDetails/>
          <List title={'Users'}/>
        </div>
    );
  }
}

// Maps the aplication state directly to component props
const mapStateToProps = (state) => {
  return {
    backgroundColor: state.background.bgColor
  };
}

// Maps the action creators through dispatch directly to component props
const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => {
      dispatch(getAllUsers());
    }
  }
};

// Connects the component to the redux cycle
export default connect(mapStateToProps, mapDispatchToProps)(Container);
