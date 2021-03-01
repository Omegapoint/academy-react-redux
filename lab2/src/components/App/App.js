import React, { useState, useEffect } from "react";
import { getUsers } from "../../api";
import List from "../List/List";
import BackgroundColorPicker from "../BackgroundColorPicker/BackgroundColorPicker";

import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [bgColor, setBackgroundColor] = useState("lavender");

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const changeBackgroundColor = (e) => {
    // const color = e.target.value;
    // TODO: Task 3 - change background color by setting state.
  };

  return (
    <div className="App container" style={{ background: bgColor }}>
      <div className="App-header">
        <p>Lab 2</p>
        <p className="App-header-description">
          <span role="img" aria-label="female technologist">
            👩‍💻
          </span>{" "}
          Öppna upp README.md och följ instruktionerna{" "}
          <span role="img" aria-label="male technologist">
            👨‍💻
          </span>
        </p>
      </div>
      <BackgroundColorPicker onChange={changeBackgroundColor} />
      <List
        title={/*TODO: Task 2*/ "*Insert title"}
        items={/*TODO: Task 4 */ []}
      />
    </div>
  );
};

export default App;
