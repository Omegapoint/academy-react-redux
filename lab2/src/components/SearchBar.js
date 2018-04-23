import React, { Component } from 'react';
class SearchBar extends Component {
    render() {
        return (
					<input
						type="text"
						placeholder={'sök efter namn'}
						onChange={this.props.onKeyPressed}
					/>
        );
    }
}

export default SearchBar;
