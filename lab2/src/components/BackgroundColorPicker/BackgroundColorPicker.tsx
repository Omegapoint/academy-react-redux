import React from "react";
import colors from "./colors";
import "./BackgroundColorPicker.css";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const BackgroundColorPicker = ({ onChange }: Props) => (
  <div className="BackgroundColorPicker">
    <h5>Välj bakgrundsfärg</h5>
    <select className="custom-select" onChange={onChange}>
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

export default BackgroundColorPicker;
