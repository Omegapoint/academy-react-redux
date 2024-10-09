import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

import "./List.css";

const List = ({ items = [], title }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onKeyPressed = (e) => {
    // const searchTerm = e.target.value;
    // TODO: Task 7. Implement callback logic.
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const filterListItemsBySearchTerm = (searchTerm) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // TODO: Task 8: Set up filtering by declaring filteredItems.
  // const filteredItems = ...
  const filteredItems = filterListItemsBySearchTerm(searchTerm);
  return (
    <div className="List">
      <h2 className="List-title">{title}</h2>
      <SearchBar value={searchTerm} onKeyPressed={onKeyPressed} />
      {items.length === 0 ? (
        <div className="alert alert-warning">Empty list...</div>
      ) : (
        <ul className="list-group">
          {
            // TODO: Task 6. Map (see react-examples.md if stuck :D) over items and return <li>-tags.
            // <li className="list-group-item" key={item.id}>*A list item*</li>
            filteredItems.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item.name}
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default List;
