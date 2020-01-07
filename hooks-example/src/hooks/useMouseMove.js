// Extracted use mouse move hook
import {useEffect, useState} from "react";

export const useMouseMove = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});

  // mounted, return function is cleanup
  useEffect(() => {
    const handleMouseCoords = (e) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseCoords);
    return () => {
      window.removeEventListener('mousemove', handleMouseCoords);
    }
  }, [coords]);

  return coords;
};
