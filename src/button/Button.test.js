import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  let wrapper;
  const props = {
    label: "test label",
    onClick: jest.fn(),
  };
  beforeEach(() => {
    wrapper = <Button {...props} />;
  });
  afterEach(() => {
    cleanup();
  });

  test("renders a label passed by props", () => {
    const { getByText } = render(wrapper);
    expect(getByText("test label")).toBeTruthy();
  });

  test("onClick should run a function passed by props", () => {
    const { getByText } = render(wrapper);
    fireEvent.click(getByText('test label'))
    expect(props.onClick).toHaveBeenCalled()
  });
});
