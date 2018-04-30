import React, { Component } from 'react';
import 'typeface-pacifico';
import BackgroundColorPicker from '../BackgroundColorPicker/BackgroundColorPicker';
import List from '../List/List';
import { connect } from 'react-redux';

import './Container.css';

class Container extends Component {

    render() {
        return (
            <div className="Container container" style={{ background: this.props.backgroundColor }}>
                <div className="Container-header" style={{ fontFamily: 'Pacifico' }}>
                    <p>Lab 3</p>
                    <p className="Container-header-description">
                        ~ Öppna upp README.md och följ instruktionerna ~
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

export default connect(mapStateToProps, null)(Container);
