import React, { useState } from "react";
import "./App.css";
import { Button } from "./button/Button";

function App() {
  const [displayText, setDisplayText] = useState("Hit a button!");

    const fetchRandomFact = async () => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then(async (response) => {
          const data = await response.json();
          setDisplayText(data.value);
        })
        .catch((err) => {
          console.log("error :", err);
        });
    };
  

  return (
    <div className="App">
      <h1>Chuck Norris facts</h1>
      <div className="center-content">
        <Button label="Random Fact" onClick={() => fetchRandomFact()} />
      </div>
      <h3>{displayText}</h3>
    </div>
  );
}

export default App;
