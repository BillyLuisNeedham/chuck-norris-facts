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
    fetch.mockResponseOnce(
      JSON.stringify({
        data: {
          categories: [],
          created_at: "2020-01-05 13:42:24.40636",
          icon_url:
            "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          id: "v0KZpdCAQ3G_sYhjtSEFxg",
          updated_at: "2020-01-05 13:42:24.40636",
          url: "https://api.chucknorris.io/jokes/v0KZpdCAQ3G_sYhjtSEFxg",
          value: "test random response",
        },
      })
    );
    const data = await response.json()
    const { getByText } = render(wrapper);
    const randomFact = getByText("Random Fact");
    expect(randomFact).toBeTruthy();
    fireEvent.click(randomFact);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random"
    );
    expect(data.value).toEqual('test random response');
  });

  test("fetches a list of categories from the API ", async () => {
    const {} = render(wrapper);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/categories"
    );
  });

  test("on Click of a category item it fetches a joke from the API with that category type", async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: ["animal"] }));
    const { getByText } = render(wrapper);
    const animal = getByText("Animal");
    expect(animal).toBeTruthy();
    fireEvent.click(animal);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random?category={animal}"
    );
  });
});
