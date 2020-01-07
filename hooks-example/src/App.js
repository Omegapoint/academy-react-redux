import React from 'react';
import {useState} from 'react';
import './App.css';
import CoolWithClass from "./components/CoolWithClass";
import CoolWithHooks from "./components/CoolWithHooks";
import BackgroundColor from "./components/BackgroundColor";

function App() {

  const [showComponents, setShowComponents] = useState(true);

  return (
      <div className="App">
        <button
            onClick={() => setShowComponents(!showComponents)}>{showComponents ? 'hide' : 'show'} components
        </button>
        {showComponents && <CoolWithClass/>}
        {showComponents && <CoolWithHooks/>}
        <BackgroundColor/>
      </div>
  );
}

export default App;
