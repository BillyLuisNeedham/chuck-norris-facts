import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";

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

  test("renders a random fact button that onClick fetches a randomFact from API and displays it", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "M_4KNb_EQQOyRR_UNtNdew",
        url: "",
        value: "Chuck Norris sits on his tv and watches the couch.",
      })
    );
    const { getByText } = render(wrapper);
    const randomFact = getByText("Random Fact");
    expect(randomFact).toBeTruthy();
    fireEvent.click(randomFact);
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random"
    );
  });

  test("renders a list of categories ", () => {
    const { getByText } = render(wrapper);
    expect(fetch),
      toHaveBeenCalledWith("https://api.chucknorris.io/jokes/categories");
    expect(getByText("animal")).toBeTruthy();
    expect(getByText("career")).toBeTruthy();
    expect(getByText("celebrity")).toBeTruthy();
    expect(getByText("dev")).toBeTruthy();
    expect(getByText("explicit")).toBeTruthy();
    expect(getByText("fashion")).toBeTruthy();
    expect(getByText("food")).toBeTruthy();
    expect(getByText("history")).toBeTruthy();
    expect(getByText("money")).toBeTruthy();
    expect(getByText("movie")).toBeTruthy();
    expect(getByText("music")).toBeTruthy();
    expect(getByText("political")).toBeTruthy();
    expect(getByText("religion")).toBeTruthy();
    expect(getByText("science")).toBeTruthy();
    expect(getByText("sport")).toBeTruthy();
    expect(getByText("travel")).toBeTruthy();
  });
});
