import React, { useEffect } from "react";
import BackgroundColorPicker from "../BackgroundColorPicker/BackgroundColorPicker";
import List from "../List/List";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/userActions";

import "./Container.css";

const Container = () => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.background.bgColor);

  // TODO: Task 5 - Get all users upon mounting the component
  useEffect(() => {}, []);

  return (
    <div
      className="Container container"
      style={{ background: backgroundColor }}
    >
      <div className="Container-header">
        <p>Lab 3</p>
        <p className="Container-header-description">
          <span role="img" aria-label="female technologist">
            👩‍💻
          </span>{" "}
          Öppna upp README.md och följ instruktionerna{" "}
          <span role="img" aria-label="male technologist">
            👨‍💻
          </span>
        </p>
      </div>
      <BackgroundColorPicker
        onChange={() => {
          console.log("FOO");
        }}
      />
      <List title={"Users"} items={[]} />
    </div>
  );
};

// Connects the component to the redux cycle
export default Container;
