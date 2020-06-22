import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Catagories } from "./Catagories";

describe("Catagories", () => {
  let wrapper;
  const props = {
    catagories: ["test1", "test2", "test3"],
    func: jest.fn(),
  };
  beforeEach(() => {
    wrapper = <Catagories {...props} />;
  });
  afterEach(() => {
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
    fireEvent.click(getByText('Test1'))
    expect(props.func).toHaveBeenCalledWith('test1')
});
});
