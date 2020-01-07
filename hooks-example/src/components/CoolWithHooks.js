import React, {useEffect, useState, useReducer} from "react";
import {getInformationAboutNumber} from "../api";
import {useMouseMove} from "../hooks/useMouseMove";
import {useHexBasedOnCoords} from "../hooks/useHexBasedOnCoords";

const initialState = {count: 0};
const buttonReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
};

const CoolWithHooks = props => {
  const [state, dispatch] = useReducer(buttonReducer, initialState);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const mouseCoords = useMouseMove();
  const hex = useHexBasedOnCoords(mouseCoords);


  useEffect(() => {
    console.log('count effect ran');
    getInformationAboutNumber(count).then(setText);
  }, [count]);

  useEffect(() => {
    console.log('text was updated');
  }, [text]);

  return (
      <div style={{ 'backgroundColor': hex}}>
        <h1>I am a COOL hooks component</h1>
        <h3>{text}</h3>
        <h4>Mouse coords - X: {mouseCoords.x}, Y: {mouseCoords.y}</h4>
        <button onClick={() => setCount(count + 1)}>Increment counter</button>
        <p>Class button was clicked {count} {count === 1 ? 'time' : 'times'}</p>


        <button onClick={() => dispatch({ type: 'increment'})}>Inc</button>
        <button onClick={() => dispatch({ type: 'decrement'})}>Dec</button>
        <h3>Reduced state: {state.count}</h3>
      </div>
  )
};

export default CoolWithHooks;
