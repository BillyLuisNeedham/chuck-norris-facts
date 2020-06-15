import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "./button/Button";

function App() {
  const [displayText, setDisplayText] = useState("Hit a button!");

  const [categories, setCategories] = useState("loading");

  useEffect(() => {
    const fetchCategories = async () => {
      fetch("https://api.chucknorris.io/jokes/categories").then(
        async (response) => {
          const data = await response.json();
          console.log(data)
          setCategories(data);
        }
      ).catch(err => {
        console.log('error :', err)
      })
    };
    fetchCategories()
  }, []);
  
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

  // <ul>
  //   {categories.map((el, index) => (
  //     <li key={index}>{el}</li>
  //   ))}
  // </ul>
  return (
    <div className="App">
      <h1>Chuck Norris facts</h1>
      <div>
      </div>
      <div className="center-content">
        <Button label="Random Fact" onClick={() => fetchRandomFact()} />
      </div>
      <h3>{displayText}</h3>
    </div>
  );
}

export default App;
