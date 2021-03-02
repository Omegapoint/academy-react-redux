import React, { Component } from "react";
import colors from "./colors";
import "./BackgroundColorPicker.css";

const BackgroundColorPicker = ({ onChange }) => (
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
