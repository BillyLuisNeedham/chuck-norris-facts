import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { ResultsDisplay } from "./ResultsDisplay";

describe("ResultsDisplay", () => {
  let props;
  afterEach(() => {
    cleanup();
  });

  it("renders a text passed by props", () => {
    props = {
      display: "test display",
    };
    const { getByText } = render(<ResultsDisplay {...props} />);
    expect(getByText("test display")).toBeTruthy();
  });

  it("renders a text count if display prop is an array of strings", () => {
    props = {
      display: ["test display1", "test display2"],
    };
    const { getByText } = render(<ResultsDisplay {...props} />);
    expect(getByText("2 Results")).toBeTruthy();
  });

  it("renders a next/previous button if display prop is an array of strings, displays only one result at a time and cycles through the displays with next/previous button", () => {
    const { getByTitle, getByText, queryByText } = render(
      <ResultsDisplay {...props} />
    );
    const nextButton = getByTitle("next-button");
    const previousButton = getByTitle("previous-button");
    expect(nextButton).toBeTruthy();
    expect(previousButton).toBeTruthy();
    expect(getByText("test display1")).toBeTruthy();
    expect(queryByText("test display2")).toBeFalsy();
    fireEvent.click(nextButton);
    expect(queryByText("test display1")).toBeFalsy();
    expect(getByText("test display2")).toBeTruthy();
    fireEvent.click(previousButton);
    expect(getByText("test display1")).toBeTruthy();
    expect(queryByText("test display2")).toBeFalsy();
  });   
});
