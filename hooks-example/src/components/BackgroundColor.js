import React from "react";
import {useHexBasedOnCoords} from "../hooks/useHexBasedOnCoords";
import {useMouseMove} from "../hooks/useMouseMove";

const BackgroundColor = () => {
  const hex = useHexBasedOnCoords(useMouseMove());
  return (
      <div style={{'height': '400px', 'backgroundColor': hex}}>
        <h1>{hex}</h1>
      </div>
  )
};

export default BackgroundColor;
