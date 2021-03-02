import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { connect } from "react-redux";

import "./List.css";

const List = ({ items, title }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onItemClick = (userId) => {
    console.log("Clicked on user", userId);
  };

  const onKeyPressed = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterListItemsBySearchTerm = (searchTerm) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredItems = filterListItemsBySearchTerm(searchTerm);

  return (
    <div className="List">
      <h2 className="List-title">{title}</h2>
      <SearchBar onKeyPressed={onKeyPressed} />
      {filteredItems.length === 0 ? (
        <div className="alert alert-warning">Empty list...</div>
      ) : (
        <ul className="list-group">
          {filteredItems.length > 0 &&
            filteredItems.map((item) => (
              <li
                className="List-item list-group-item"
                key={item.id}
                onClick={(e) => onItemClick(item.id)}
              >
                {item.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: [], // TODO: Task 6 - Implement mapStateToProps
  };
};

export default connect(mapStateToProps, null)(List);
