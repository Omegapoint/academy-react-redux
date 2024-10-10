import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

import "./List.css";

const List = ({ items = [], title }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onKeyPressed = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const filterListItemsBySearchTerm = (searchTerm) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            filteredItems.map((item) => (
                <li className="list-group-item" key={item.id}>{item.name}</li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default List;
