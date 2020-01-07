import {useEffect, useState} from "react";
import colorConvert from 'color-convert';

export function xyToRgb(x, y) {
  return `#${colorConvert.rgb.hex(x / 2, y / 2, x)}`
}

export const useHexBasedOnCoords = (props) => {
  const [rgb, setRgb] = useState('#ffffff');

  useEffect(() => {
    setRgb(xyToRgb(props.x, props.y));
  }, [props]);

  return rgb;
};
