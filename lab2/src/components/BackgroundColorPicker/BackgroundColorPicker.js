import React, { Component } from "react";
import "./BackgroundColorPicker.css";

const BackgroundColorPicker = ({ onChange }) => {
  const colors = [
    {
      hex: "lavender",
      name: "lavender",
    },
    {
      hex: "gold",
      name: "gold",
    },
    {
      hex: "#f48c42",
      name: "🎃",
    },
    {
      hex: "rebeccapurple",
      name: "Beautiful purple",
    },
  ];

  return (
    <div className="BackgroundColorPicker">
      <h5>Välj bakgrundsfärg</h5>
      <select className="custom-select" onChange={onChange}>
        {colors.map((color, index) => {
          return (
            <option key={index} value={color.hex}>
              {color.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BackgroundColorPicker;
