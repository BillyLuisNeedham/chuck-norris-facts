import React from "react";
import { render, fireEvent, cleanup, waitForElementToBeRemoved } from "@testing-library/react";
import { Cockpit } from "./Cockpit";

describe("Cockpit", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    wrapper = <Cockpit {...props} />;
  });
  cleanup(() => {
    cleanup();
  });

  it("renders a random fact button that onClick fetches a random fact from the API then displays the returned fact on screen", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        categories: [],
        created_at: "2020-01-05 13:42:19.897976",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "dSzdzt0XTjKcM8YwUvbNmg",
        updated_at: "2020-01-05 13:42:19.897976",
        url: "https://api.chucknorris.io/jokes/dSzdzt0XTjKcM8YwUvbNmg",
        value:
          "test random joke",
      })
    );  
    const { getByText } = render(wrapper);
    const randomButton = getByText("Random Fact");
    expect(randomButton).toBeTruthy();
    fireEvent.click(randomButton)
    await waitForElementToBeRemoved(() => getByText('Hit a button!'))
    expect(getByText('test random joke')).toBeTruthy()
  });
});
