import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { ResultsDisplay } from "./ResultsDisplay";

describe("ResultsDisplay", () => {
  let wrapper;
  let props = {
    display: "test display",
  };
  beforeEach(() => {
    wrapper = <ResultsDisplay {...props} />;
  });
  afterEach(() => {
    cleanup();
  });

  it("renders a text passed by props", () => {
    const { getByText } = render(wrapper);
    expect(getByText("test display")).toBeTruthy();
  });

  it('renders a text count if display is an array of strings', () => {
      
  });
});
