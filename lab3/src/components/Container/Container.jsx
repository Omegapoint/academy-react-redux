import React, { useEffect } from "react";
import BackgroundColorPicker from "../BackgroundColorPicker/BackgroundColorPicker";
import List from "../List/List";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/userActions";
import { selectBackgroundColor } from "../../features/background/backgroundSlice";

import "./Container.css";

const Container = () => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector(selectBackgroundColor);

  // TODO: Task 5 - Get all users upon mounting the component
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

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
      <BackgroundColorPicker />
      <List title="Users" />
    </div>
  );
};

// Connects the component to the redux cycle
export default Container;
