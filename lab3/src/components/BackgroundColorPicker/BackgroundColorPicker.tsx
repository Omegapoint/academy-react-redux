import React from "react";
import { useDispatch } from "react-redux";
import colors from "./colors";
import { updatedBackgroundColor } from "../../features/background/backgroundSlice";
import "./BackgroundColorPicker.css";

const BackgroundColorPicker = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updatedBackgroundColor(e.target.value));
  };

  return (
    <div className="BackgroundColorPicker">
      <h5>Välj bakgrundsfärg</h5>
      <select className="custom-select" onChange={handleOnChange}>
        {colors.map((color) => {
          return (
            <option key={`color-${color.name}`} value={color.hex}>
              {color.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BackgroundColorPicker;
