import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Catagories } from "./Catagories";

describe("Catagories", () => {
  let wrapper;
  const props = {
    catagories: ["test1", "test2", "test3"],
  };
  beforeEach(() => {
    wrapper = <Catagories {...props} />;
  });
  cleanup(() => {
    cleanup();
  });

  test("maps a list of catagories passed by props with the first letter capitalized", () => {
    const { getByText } = render(wrapper);
    expect(getByText('Test1')).toBeTruthy()
    expect(getByText('Test2')).toBeTruthy()
    expect(getByText('Test3')).toBeTruthy()
  });
});
