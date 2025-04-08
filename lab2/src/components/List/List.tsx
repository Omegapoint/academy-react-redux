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
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const filterListItemsBySearchTerm = (searchTerm: string): Array<User> =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredItems = filterListItemsBySearchTerm(searchTerm);

  console.log("ITEMS", items);

  return (
    <div className="List">
      <h2 className="List-title">{title}</h2>
      <SearchBar value={searchTerm} onKeyPressed={onKeyPressed} />
      {items.length === 0 ? (
        <div className="alert alert-warning">Empty list...</div>
      ) : (
        <ul className="list-group">
          {filteredItems.map((item) => (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
