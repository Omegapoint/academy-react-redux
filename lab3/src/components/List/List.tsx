import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, selectUsers } from "../../features/users/usersSlice";

import "./List.css";
import { User } from "../../models/user.model";
import { AppDispatch } from "../../store";

type Props = {
  title: string;
};

const List = ({ title }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = useState("");

  const users = useSelector(selectUsers);

  const onItemClick = (userId: number) => {
    dispatch(fetchUser(userId));
  };

  const onKeyPressed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filterUsersBySearchTerm = (searchTerm: string): Array<User> =>
    users.all.filter((user: User) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredUsers: Array<User> = filterUsersBySearchTerm(searchTerm);

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
