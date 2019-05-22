import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import {connect} from 'react-redux';

import "./List.css";

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  onItemClick = (userId) => {
    console.log("Clicked on user", userId);
  };

  onKeyPressed = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  };

  filterListItemsBySearchTerm = (searchTerm) => {
    return this.props.items
        .filter(item => {
          return item.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
  };

  render() {
    const filteredItems = this.filterListItemsBySearchTerm(this.state.searchTerm);
    return (
        <div className="List">
          <h2 className="List-title">{this.props.title}</h2>
          <SearchBar onKeyPressed={this.onKeyPressed}/>
          {this.props.items.length === 0 ? (
              <div className="alert alert-warning">Empty list...</div>) : (
              <ul className="list-group">
                {this.props.items.length > 0 &&
                filteredItems.map((item, index) => (
                    <li className="List-item list-group-item" key={index}
                        onClick={(e) => this.onItemClick(item.id)}>{item.name}</li>
                ))
                }
              </ul>
          )}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  // TODO: Task 6 - Implement mapStateToProps
};

export default connect(mapStateToProps, null)(List);
