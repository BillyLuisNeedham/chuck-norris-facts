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

describe("Cockpit", () => {
  const mockedCategoryCall = JSON.stringify(["test1", "test2"]);
  let wrapper;
  let props;
  beforeEach(() => {
      fetch.resetMocks()
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
    const promise = Promise.resolve()
    const fetchCategoryFact = jest.fn(() => promise)
    const { getByText } = render(wrapper);
    await waitForElement(() => getByText("Test2"));
    fireEvent.click(getByText("Test2"));
    await act(() => promise)
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random?category=test2"
    );
    expect(getByText("test2 fetch")).toBeTruthy();
  });
});
