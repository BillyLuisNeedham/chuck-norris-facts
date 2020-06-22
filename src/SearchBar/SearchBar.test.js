import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  let wrapper;
  const props = {
    searchFunc: jest.fn(),
  };
  beforeEach(() => {
    wrapper = <SearchBar {...props} />;
  });
  cleanup(() => {
    cleanup();
  });

  it("renders a text input and a search button that onClick calls the searchFunc passed via props with the value of the text input as a parameter", () => {
    const { getByText, getByTitle } = render(wrapper);
    const searchBar = getByTitle("search-bar");
    const searchButton = getByText("Search");
    expect(searchBar).toBeTruthy();
    expect(searchButton).toBeTruthy();
    fireEvent.change(SearchBar, { target: { value: "test search" } });
    fireEvent.click(searchButton);
    expect(props.searchFunc).toHaveBeenCalledWith("test search");
  });
});
