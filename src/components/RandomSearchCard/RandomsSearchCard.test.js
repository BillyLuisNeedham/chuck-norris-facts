import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import { RandomSearchCard } from "./RandomSearchCard";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../SearchBar/SearchBar";

describe("RandomSearchCard", () => {
  let wrapper;
  const props = {
    randomFactFunc: jest.fn(),
    searchFactFunc: jest.fn(),
  };
  beforeEach(() => {
    wrapper = <RandomSearchCard {...props} />;
  });
  afterEach(() => {
    cleanup();
  });

  it("renders a random fact button", () => {
    render(wrapper);
    expect(screen.getByText(/Random Fact/i)).toBeTruthy()
  });

  it("renders a search bar component", () => {
  render(wrapper)
  expect(screen.getByTitle(/search-bar/i)).toBeTruthy()
  });
});