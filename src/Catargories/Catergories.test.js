import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Catagories } from "./Catagories";
import { jssPreset } from "@material-ui/core";

describe("Catagories", () => {
  let wrapper;
  const props = {
    catagories: ["test1", "test2", "test3"],
    onClick: jest.fn(),
  };
  beforeEach(() => {
    wrapper = <Catagories {...props} />;
  });
  cleanup(() => {
    cleanup();
  });

  test("maps a list of catagories passed by props with the first letter capitalized", () => {
    const { getByText } = render(wrapper);
    expect(getByText("Test1")).toBeTruthy();
    expect(getByText("Test2")).toBeTruthy();
    expect(getByText("Test3")).toBeTruthy();
  });

  test("on click of a category calls onClick function passed by props with the title of the category as an input", () => {
    const { getByText } = render(wrapper);
    fireEvent.click('Test1')
    expect(props.onClick).toHaveBeenCalledWith('test1')
});
});
