import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Catagories } from "../Catargories/Catagories";
import { SearchBar } from "../SearchBar/SearchBar";
import { ResultsDisplay } from "../ResultsDisplay/ResultsDisplay";

export const Cockpit = ({}) => {
  const [displayText, setDisplayText] = useState("Hit a button!");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      fetch("https://api.chucknorris.io/jokes/categories")
        .then(async (response) => {
          const data = await response.json();
          let objData = data;
          setCategories(objData);
        })
        .catch((err) => {
          console.log("error :", err);
        });
    };
    fetchCategories();
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

  const fetchCategoryFact = async (input) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${input}`)
      .then(async (response) => {
        const data = await response.json();
        setDisplayText(data.value);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  const fetchSearchFact = async (input) => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${input}`)
      .then(async (response) => {
        const data = await response.json();
        if (data.status !== 400) {
          setDisplayText(data.result.map((fact) => fact.value));
          console.log(displayText);
        } else {
          setDisplayText("Error: Bad request, try again to not make Chuck angry");
        }
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  return (
    <div id="cockpit" title="cockpit">
      <h1>Chuck Norris Facts</h1>
      <div className="catagories-cont">
        <Catagories func={fetchCategoryFact} catagories={categories} />
      </div>
      <div className="button-cont">
        <Button label="Random Fact" onClick={() => fetchRandomFact()} />
        <SearchBar searchFunc={fetchSearchFact} />
      </div>
      <ResultsDisplay display={displayText} />
    </div>
  );
};
