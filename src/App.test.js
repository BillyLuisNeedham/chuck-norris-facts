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
  });

  test("renders a random fact button that onClick fetches a randomFact from API and displays it", async () => {
      // TODO(Billy): Fetch mock not working
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
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(getByText("Chuck Norris sits on his tv and watches the couch.")).toBeTruthy();
  });
});
