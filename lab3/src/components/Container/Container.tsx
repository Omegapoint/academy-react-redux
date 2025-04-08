import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBackgroundColor } from "../../features/background/backgroundSlice";
import { fetchUsers } from "../../features/users/usersSlice";
import AvatarPicker from "../AvatarPicker/AvatarPicker";
import BackgroundColorPicker from "../BackgroundColorPicker/BackgroundColorPicker";
import List from "../List/List";

import { AppDispatch } from "../../store";
import NavBar from "../NavBar/NavBar";
import "./Container.css";

const Container = () => {
  const dispatch = useDispatch<AppDispatch>();
  const backgroundColor = useSelector(selectBackgroundColor);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div
        className="Container container"
        style={{ background: backgroundColor }}
      >
        <NavBar />
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
        <AvatarPicker />
        <List title="Användare" />
      </div>
    </>
  );
};

// Connects the component to the redux cycle
export default Container;
