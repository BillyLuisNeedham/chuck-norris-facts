import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElementToBeRemoved,
  waitForElement,
} from "@testing-library/react";
import { Cockpit } from "./Cockpit";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Cockpit", () => {
  const mockedCategoryCall = JSON.stringify(["test1", "test2"]);
  const promise = Promise.resolve();
  let wrapper;
  let props;
  beforeEach(() => {
    fetch.resetMocks();
    wrapper = <Cockpit {...props} />;
  });
  cleanup(() => {
    cleanup();
  });

  it("renders a random fact button that onClick fetches a random fact from the API then displays the returned fact on screen", async () => {
    fetch.mockResponses(
      [mockedCategoryCall],
      [
        JSON.stringify({
          categories: [],
          created_at: "2020-01-05 13:42:19.897976",
          icon_url:
            "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          id: "dSzdzt0XTjKcM8YwUvbNmg",
          updated_at: "2020-01-05 13:42:19.897976",
          url: "https://api.chucknorris.io/jokes/dSzdzt0XTjKcM8YwUvbNmg",
          value: "test random joke",
        }),
      ]
    );
    const { getByText } = render(wrapper);
    const randomButton = getByText("Random Fact");
    expect(randomButton).toBeTruthy();
    fireEvent.click(randomButton);
    await waitForElementToBeRemoved(() => getByText("Hit a button!"));
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random"
    );
    expect(getByText("test random joke")).toBeTruthy();
  });

  it("on render fetches a list of categories from the API, capitalizes the first character and maps them to the screen", async () => {
    fetch.mockResponses([mockedCategoryCall]);
    const { getByText } = render(wrapper);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/categories"
    );
    await waitForElement(() => getByText("Test1"));
    expect(getByText("Test1")).toBeTruthy();
    expect(getByText("Test2")).toBeTruthy();
  });

  it("onClick of a category option fetches a response of the category type", async () => {
    fetch.mockResponses(
      [mockedCategoryCall],
      [
        JSON.stringify({
          categories: ["test1"],
          created_at: "2020-01-05 13:42:19.576875",
          icon_url:
            "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          id: "xwjic1sws_yohsfefndaiw",
          updated_at: "2020-01-05 13:42:19.576875",
          url: "https://api.chucknorris.io/jokes/xwjic1sws_yohsfefndaiw",
          value: "test2 fetch",
        }),
      ]
    );
    const { getByText } = render(wrapper);
    await waitForElement(() => getByText("Test2"));
    fireEvent.click(getByText("Test2"));
    await act(() => promise);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random?category=test2"
    );
    expect(getByText("test2 fetch")).toBeTruthy();
  });

  it("renders a search bar and a search button that on click of the search button queries the API for jokes related to the query", async () => {
    fetch.mockResponses(
      [mockedCategoryCall],
      [
        JSON.stringify({
          total: 1,
          result: [
            {
              categories: [],
              created_at: "2020-01-05 13:42:19.104863",
              icon_url:
                "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
              id: "pjepanwfqgowpgc3uf_7hg",
              updated_at: "2020-01-05 13:42:19.104863",
              url: "https://api.chucknorris.io/jokes/pjepanwfqgowpgc3uf_7hg",
              value: "test search result",
            },
          ],
        }),
      ]
    );
    const { getByText, getByTitle } = render(wrapper);
    await waitForElement(() => getByText("Test2"));
    const searchBar = getByTitle("search-bar");
    const searchButton = getByText("Search");
    expect(searchBar).toBeTruthy();
    expect(searchButton).toBeTruthy();
    fireEvent.change(searchBar, { target: { value: "testSearch" } });
    fireEvent.click(searchButton);
    await waitForElement(() => getByText("test search result"));
    expect(getByText("test search result")).toBeTruthy();
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/search?query=testSearch"
    );
  });

  it("renders an error message if a search result comes back with no results", async () => {
    fetch.mockResponses(
      [mockedCategoryCall],
      [
        JSON.stringify({
          timestamp: "2020-06-22T15:43:42.363Z",
          status: 400,
          error: "Bad Request",
          message: "search.query: size must be between 3 and 120",
          violations: {
            "search.query": "size must be between 3 and 120",
          },
        }),
      ]
    );
    const { getByText, getByTitle } = render(wrapper);
    await waitForElement(() => getByText("Test2"));
    userEvent.type(getByTitle("search-bar"), "a");
    fireEvent.click(getByText("Search"));
    await waitForElement(() =>
      getByText("Error: Bad request, try again to not make Chuck angry")
    );
    expect(
      getByText("Error: Bad request, try again to not make Chuck angry")
    ).toBeTruthy();
  });

  it("renders a ResultsDisplay component", () => {
    const { getByTitle } = render(wrapper);
    expect(getByTitle("result-display")).toBeTruthy();
  });
});
