import React from "react";
import { useDispatch } from "react-redux";
import { resetAvatar, updatedAvatar } from "../../features/avatar/avatarSlice";
import "./AvatarPicker.css";

const AvatarPicker = () => {
  const dispatch = useDispatch();

  const handleOnClick = (avatar) => {
    dispatch(updatedAvatar(avatar));
  };

  const handleOnReset = () => {
    dispatch(resetAvatar());
  };

  return (
    <div>
      <h5>Välj avatar</h5>
      <div className="buttonContainer">
        <button className="btn btn-primary" onClick={() => handleOnClick("🦊")}>
          Fox
        </button>
        <button className="btn btn-primary" onClick={() => handleOnClick("🐢")}>
          Turtle
        </button>
        <button className="btn btn-primary" onClick={() => handleOnClick("🦩")}>
          Flamingo
        </button>
        <button className="btn btn-primary" onClick={() => handleOnReset()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default AvatarPicker;
