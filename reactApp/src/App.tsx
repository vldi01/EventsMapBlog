import React from 'react';
import './App.css';
import {Platform} from "./kotlin";

function App() {
  return (
    <div className="App">
      <p>The platform is {Platform.platformName}</p>
    </div>
  );
}

export default App;
