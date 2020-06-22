import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

describe("App", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    wrapper = <App {...props} />;
    fetch.resetMocks();
  });
  cleanup(() => {
    cleanup();
    jest.mockClear();
  });

  // FIXME(Billy): Need to mock API calls

  test("renders a random fact button that onClick fetches a randomFact from API and displays it", async () => {
    const { getByText } = render(wrapper);
    const randomFact = getByText("Random Fact");
    expect(randomFact).toBeTruthy();
    fireEvent.click(randomFact);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random"
    );
  });

  test("fetches a list of categories from the API ", () => {
    const {} = render(wrapper);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/categories"
    );
  });

  test("on Click of a category item it fetches a joke from the API with that category type", () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        catagories: ["animal"],
      })
    );
    const { getByText } = render(wrapper);
    const animal = getByText("Animal");
    expect(animal).toBeTruthy();
    fireEvent.click(animal);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random?category={category}"
    );
  });
});
