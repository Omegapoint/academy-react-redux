import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { User } from "../../models/user.model";

import "./List.css";

type Props = {
  items: Array<User>;
  title: string;
};

const List = ({ items = [], title }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onKeyPressed = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const searchTerm = e.target.value;
    // TODO: Task 7. Implement callback logic.
  };

  const filterListItemsBySearchTerm = (searchTerm: string): Array<User> =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // TODO: Task 8: Set up filtering by declaring filteredItems.
  // const filteredItems = ...

  console.log("ITEMS", items);

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
          }
        </ul>
      )}
    </div>
  );
};

export default List;
