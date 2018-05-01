import React, { Component } from 'react';
import BackgroundColorPicker from '../BackgroundColorPicker/BackgroundColorPicker';
import List from '../List/List';
import { connect } from 'react-redux';
import { getAllUsers } from '../../actions/userActions';

import './Container.css';

class Container extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

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
                <List title={'Users'} items={[]} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		backgroundColor: state.background.bgColor
	};
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => {
            dispatch(getAllUsers());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
