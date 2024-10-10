import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { selectUsers } from "../../features/users/usersSlice";

import "./List.css";

const List = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = useSelector(selectUsers);

  const onItemClick = (userId) => {
    console.log("Clicked on user", userId);
  };

  const onKeyPressed = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterUsersBySearchTerm = (searchTerm) =>
    users.all.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredUsers = filterUsersBySearchTerm(searchTerm);

  return (
    <div className="List">
      <h2 className="List-title">{title}</h2>
      <SearchBar onKeyPressed={onKeyPressed} />
      {filteredUsers.length === 0 ? (
        <div className="alert alert-warning">Empty list...</div>
      ) : (
        <ul className="list-group">
          {filteredUsers.map((item) => (
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

export default List;
