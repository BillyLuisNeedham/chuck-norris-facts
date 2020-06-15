import React from "react";
import "./App.css";
import { Button } from "./button/Button";

function App() {
  function getRandomFact() {
    return new Promise((resolve, reject) => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => {
          resolve(console.log(res));
        })
        .catch((err) => {
          reject(console.log("error :", err));
        });
    });
  }

  return (
    <div className="App">
      <h1>Chuck Norris facts</h1>
      <div className="center-content">
        <Button label="Random Fact" onClick={() => getRandomFact()} />
      </div>
    </div>
  );
}

export default App;
