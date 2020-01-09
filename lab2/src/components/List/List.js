import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';

import "./List.css";

class List extends Component {

  static defaultProps = {
    items: []
  };

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  onKeyPressed = (e) => {
    // const searchTerm = e.target.value;
    // TODO: Task 7. Implement callback logic.
  };

  filterListItemsBySearchTerm = (searchTerm) => {
    return this.props.items
        .filter(item => {
          return item.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
  };

  render() {
    // TODO: Task 8: Set up filtering by declaring filteredItems.
    // const filteredItems = ...
    return (
        <div className="List">
          <h2 className="List-title">{this.props.title}</h2>
          <SearchBar value={this.state.searchTerm} onKeyPressed={this.onKeyPressed}/>
          {this.props.items.length === 0 ? (<div>Empty list...</div>) : (
              <ul className="list-group">
                {
                  // TODO: Task 6. Map (see react-examples.md if stuck :D) over items and return <li>-tags.
                  // <li className="list-group-item">A list item</li>
                  console.log("ITEMS", this.props.items)
                }
              </ul>
          )}
        </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array
};

export default List;
