import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { ResultsDisplay } from "./ResultsDisplay";

describe("ResultsDisplay", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    wrapper = <ResultsDisplay {...props} />;
  });
  cleanup(() => {
    props = null;
    cleanup();
  });

  it("renders a text passed by props", () => {
      props = {
        display: 'test display'
      }
    const { getByText } = render(wrapper);
    expect(getByText('test display')).toBeTruthy()
  });
});
