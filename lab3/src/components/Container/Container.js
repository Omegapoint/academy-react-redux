import React, { Component } from 'react';
import BackgroundColorPicker from '../BackgroundColorPicker/BackgroundColorPicker';
import List from '../List/List';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/userActions';

import './Container.css';

class Container extends Component {

    // TODO: Task 4 - get all users upon mounting the component

    render() {
        return (
            <div className="Container container" style={{ background: this.props.backgroundColor }}>
                <div className="Container-header">
                    <p>Lab 3</p>
                    <p className="Container-header-description">
                        👩‍💻 Öppna upp README.md och följ instruktionerna 👨‍💻
					</p>
                </div>
                <BackgroundColorPicker onChange={() => { console.log("FOO") }} />
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
