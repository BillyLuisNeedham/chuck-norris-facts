import React from "react";
import "./App.css";
import { Button } from "./button/Button";

function App() {
  return (
    <div className="App">
      <h1>Chuck Norris facts</h1>
      <div>
        <Button label="Random Fact" />
      </div>
    </div>
  );
}

export default App;
